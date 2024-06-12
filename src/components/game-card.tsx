"use client";

import cn from "classnames";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, {
  type ComponentType,
  type CSSProperties,
  type MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { GiChicken } from "react-icons/gi";

const CARD_BACKS = {
  green:
    "repeating-linear-gradient(45deg, #4BC87F, #4BC87F 15px,  #29668A 0, #29668A 30px)",
  brown:
    "repeating-linear-gradient(90deg, #FFE26F, #FFE26F 15px,  #563761 0, #563761 30px)",
  blue: "repeating-linear-gradient(0deg, #5FB9B0, #5FB9B0 15px,  #413D65 0, #413D65 30px)",
  red: "repeating-linear-gradient(135deg, #9B9B93, #9B9B93 15px,  #481620 0, #481620 30px)",
  gray: "repeating-linear-gradient(15deg, #e8e1ef, #e8e1ef 15px,  #59656f 0, #59656f 30px)",
} as const;

type CardBack = keyof typeof CARD_BACKS;

const DRAG_STRENGTH = 0.2;
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

interface GameCardProps {
  name: string;
  description: string;
  bonus?: string;
  cardBack?: CardBack;
  icon: ComponentType<{
    className?: string;
    style?: CSSProperties;
  }>;
}

const GameCard = (props: GameCardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [initialDragPosition, setInitialDragPosition] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xDrag = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const xDragSpring = useSpring(xDrag);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg) translateX(${xDragSpring}px)`;

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isDragging) return;
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    if (isFlipped) {
      x.set(rX);
      y.set(rY + 180);
    } else {
      x.set(rX);
      y.set(rY);
    }
  };

  const handleMouseLeave = () => {
    if (isFlipped) {
      x.set(0);
      y.set(180);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleOnClick = () => {
    if (isDragging) return;
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (isFlipped) {
      x.set(0);
      y.set(180);
      return;
    } else {
      x.set(0);
      y.set(0);
    }
  }, [isFlipped, x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={cn(
        "relative h-96 min-w-72 select-none rounded-xl bg-orange-100",
        { "z-10": isDragging },
      )}
      animate={false}
      drag
      onDrag={(_, info) => {
        const dragDistance = info.point.x - initialDragPosition;
        if (isFlipped) xDrag.set(dragDistance * DRAG_STRENGTH * -1);
        else xDrag.set(dragDistance * DRAG_STRENGTH);
      }}
      onDragStart={(_, info) => {
        setInitialDragPosition(info.point.x);
        setIsDragging(true);
      }}
      onDragEnd={() => {
        setInitialDragPosition(0);
        setTimeout(() => {
          setIsDragging(false);
        }, 200);
        xDrag.set(0);
      }}
    >
      <div
        style={{
          transform: "translateZ(15px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-3 flex flex-col justify-between rounded-xl border-4 border-neutral-900"
      >
        <div
          className="mx-8 -mt-1 flex flex-row justify-center rounded-b-lg border-t-2 border-neutral-900 bg-neutral-900 py-1 text-white shadow-lg"
          style={{
            transform: "translateZ(0px)",
          }}
        >
          <p>{props.name}</p>
        </div>
        <props.icon
          style={{
            transform: "translateZ(-5px)",
          }}
          className="mx-auto text-8xl"
        />
        <div
          className="mx-8 -mb-1 flex flex-col items-center justify-center gap-1 rounded-t-lg border-b-2 border-neutral-900 bg-neutral-900 px-3 py-2 text-white shadow-lg"
          style={{
            transform: "translateZ(0px)",
          }}
        >
          <p className="text-sm">{props.description}</p>
          {props.bonus && (
            <p className="text-sm italic">Bonus: {props.bonus}</p>
          )}
        </div>
      </div>
      <div
        style={{
          transform: "translateZ(-1px)",
          transformStyle: "preserve-3d",
          background: props.cardBack
            ? CARD_BACKS[props.cardBack]
            : CARD_BACKS.green,
        }}
        className="absolute inset-0 flex flex-col justify-center rounded-xl border-8 border-neutral-900"
      >
        <GiChicken
          style={{
            transform: "translateZ(-5px)",
          }}
          className="mx-auto text-9xl"
        />
      </div>
    </motion.div>
  );
};

export default GameCard;
