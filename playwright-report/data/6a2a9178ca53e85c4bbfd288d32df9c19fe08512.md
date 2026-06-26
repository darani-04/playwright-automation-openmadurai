# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\events.spec.js >> test
- Location: tests\events.spec.js:4:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'View Detail' }).first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - link "OpenMadurAI Logo" [ref=e7] [cursor=pointer]:
          - /url: /
          - img "OpenMadurAI Logo" [ref=e8]
        - generic [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: /
          - link "Native Alumni" [ref=e11] [cursor=pointer]:
            - /url: /alumni-connect
          - link "Community" [ref=e12] [cursor=pointer]:
            - /url: /community
          - link "Pride of Madurai" [ref=e13] [cursor=pointer]:
            - /url: /pride-of-madurai
          - link "Events" [ref=e14] [cursor=pointer]:
            - /url: /events
          - button "Projects" [ref=e16] [cursor=pointer]:
            - text: Projects
            - img [ref=e17]
          - link "Blogs" [ref=e19] [cursor=pointer]:
            - /url: /blogs
          - link "Leaderboard" [ref=e20] [cursor=pointer]:
            - /url: /leaderboard
        - generic [ref=e21]:
          - link "Log in" [ref=e22] [cursor=pointer]:
            - /url: /login
          - link "Join Now" [ref=e23] [cursor=pointer]:
            - /url: /register
            - button "Join Now" [ref=e24]
    - main [ref=e25]:
      - generic [ref=e27]:
        - generic [ref=e28]:
          - generic [ref=e29]:
            - img [ref=e30]
            - text: GLOBAL ECOSYSTEM
          - heading "OpenMadurAI Events Hub" [level=1] [ref=e32]
          - paragraph [ref=e33]:
            - text: The central nervous system for tech innovation in Madurai. Discover
            - text: workshops, hackathons, and global AI summits designed for the modern
            - text: engineer.
        - generic [ref=e34]:
          - img "Events Banner" [ref=e35]
          - generic [ref=e37]:
            - heading "Stay tuned for upcoming events" [level=2] [ref=e38]
            - paragraph [ref=e39]: New events will appear here once they are announced.
        - generic [ref=e40]:
          - heading "Upcoming Events" [level=2] [ref=e41]
          - generic [ref=e43]:
            - img
            - textbox "Find an event..." [ref=e44]
    - contentinfo [ref=e148]:
      - generic [ref=e149]:
        - generic [ref=e150]:
          - generic [ref=e151]:
            - img "OpenMadurAI Logo" [ref=e153]
            - paragraph [ref=e154]: An open-source AI initiative building a global community that democratizes technology through accessible intelligence and collaborative innovation.
          - generic [ref=e155]:
            - heading "Quick Links" [level=3] [ref=e156]
            - list [ref=e157]:
              - listitem [ref=e158]:
                - link "Community" [ref=e159] [cursor=pointer]:
                  - /url: /community
              - listitem [ref=e160]:
                - link "Events" [ref=e161] [cursor=pointer]:
                  - /url: /events
              - listitem [ref=e162]:
                - link "Pride of Madurai" [ref=e163] [cursor=pointer]:
                  - /url: /pride-of-madurai
              - listitem [ref=e164]:
                - link "Alumni Connect" [ref=e165] [cursor=pointer]:
                  - /url: /alumni-connect
          - generic [ref=e166]:
            - heading "Newsletter" [level=3] [ref=e167]
            - paragraph [ref=e168]: Stay ahead with the latest updates from our AI community.
            - generic [ref=e169]:
              - textbox "Enter your email" [ref=e170]
              - button "Subscribe" [ref=e171] [cursor=pointer]
        - generic [ref=e173]:
          - paragraph [ref=e174]: © 2026 OpenMadurAI. All rights reserved. v2
          - generic [ref=e175]:
            - link "Terms and Conditions" [ref=e176] [cursor=pointer]:
              - /url: /terms-and-conditions
            - generic [ref=e177]: 📍 Madurai City
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test.setTimeout(120000);
  3  | 
  4  | test('test', async ({ page }) => {
  5  |   await page.goto('https://openmadurai.org/');
  6  |   await page.getByRole('navigation').getByRole('link', { name: 'Events' }).click();
  7  |  await page.waitForLoadState('domcontentloaded');
  8  |  await expect(page.locator('body')).toBeVisible();
> 9  |   await page.getByRole('button', { name: 'View Detail' }).first().waitFor();
     |                                                                   ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  10 |   await page.getByRole('button', { name: 'View Detail' }).first().click();
  11 |   await page.goto('https://openmadurai.org/events');
  12 |   await page.waitForLoadState('domcontentloaded');
  13 | await expect(page.locator('body')).toBeVisible();
  14 |   await page.getByText('Join GDG Cloud Madurai for an').click();
  15 |   await page.goto('https://openmadurai.org/events');
  16 |   await page.waitForLoadState('domcontentloaded');
  17 | await expect(page.locator('body')).toBeVisible();
  18 |   await page.getByText('Join Google Developer Groups Madurai for an exciting AI-powered vibeathon where').click();
  19 |   await page.goto('https://openmadurai.org/events');
  20 |   await page.waitForLoadState('domcontentloaded');
  21 | await expect(page.locator('body')).toBeVisible();
  22 |   await page.getByRole('button', { name: 'View Recap' }).nth(2).click();
  23 |   await page.goto('https://openmadurai.org/events');
  24 | });
```