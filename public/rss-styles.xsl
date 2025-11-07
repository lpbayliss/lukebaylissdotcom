<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> RSS Feed</title>
        <meta charset="utf-8"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
            background: #030712;
            color: #E5E7EB;
            padding: 2rem;
            line-height: 1.6;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
          }
          header {
            border: 1px solid #10B981;
            padding: 1.5rem;
            margin-bottom: 2rem;
            background: #0B1120;
          }
          h1 {
            color: #34D399;
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
          }
          .description {
            color: #9CA3AF;
            margin-bottom: 1rem;
          }
          .subscribe {
            background: #111827;
            border: 1px solid #1F2937;
            padding: 1rem;
            margin-top: 1rem;
          }
          .subscribe code {
            background: #030712;
            padding: 0.25rem 0.5rem;
            color: #34D399;
            border: 1px solid #1F2937;
            word-break: break-all;
          }
          .item {
            border: 1px solid #1F2937;
            padding: 1.5rem;
            margin-bottom: 1rem;
            background: #0B1120;
            transition: border-color 0.2s;
          }
          .item:hover {
            border-color: #10B981;
          }
          .item-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
          .item-title a {
            color: #E5E7EB;
            text-decoration: none;
          }
          .item-title a:hover {
            color: #34D399;
          }
          .item-date {
            color: #9CA3AF;
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
          }
          .item-description {
            color: #E5E7EB;
            line-height: 1.6;
          }
          .categories {
            margin-top: 0.75rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .category {
            background: #111827;
            border: 1px solid #1F2937;
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            color: #9CA3AF;
          }
          a {
            color: #34D399;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p class="description"><xsl:value-of select="/rss/channel/description"/></p>
            <div class="subscribe">
              <p style="margin-bottom: 0.5rem;">📡 This is an RSS feed. Subscribe by copying the URL from your browser into your newsreader.</p>
              <p style="font-size: 0.875rem; color: #9CA3AF;">Visit <a href="https://aboutfeeds.com" target="_blank">About Feeds</a> to learn more and get started.</p>
            </div>
          </header>

          <main>
            <h2 style="color: #34D399; margin-bottom: 1rem; border-bottom: 1px solid #1F2937; padding-bottom: 0.5rem;">Recent Posts</h2>
            <xsl:for-each select="/rss/channel/item">
              <article class="item">
                <h3 class="item-title">
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="link"/>
                    </xsl:attribute>
                    <xsl:value-of select="title"/>
                  </a>
                </h3>
                <div class="item-date">
                  <xsl:value-of select="pubDate"/>
                </div>
                <div class="item-description">
                  <xsl:value-of select="description"/>
                </div>
                <xsl:if test="category">
                  <div class="categories">
                    <xsl:for-each select="category">
                      <span class="category">
                        <xsl:value-of select="."/>
                      </span>
                    </xsl:for-each>
                  </div>
                </xsl:if>
              </article>
            </xsl:for-each>
          </main>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
