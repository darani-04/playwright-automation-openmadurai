# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\blogs.spec.js >> test
- Location: tests\blogs.spec.js:4:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText('Read Article')
    - locator resolved to <span>Read Article</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

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
      - generic [ref=e30]:
        - generic [ref=e31]: OpenMadurAI Hub
        - heading "Latest Stories & Insights" [level=1] [ref=e32]
        - paragraph [ref=e33]: Explore articles, tutorials, and announcements from the community. Stay updated with the latest trends and knowledge sharing.
      - generic [ref=e35]:
        - generic [ref=e37]:
          - heading "Browse By Month" [level=3] [ref=e38]
          - generic [ref=e39]:
            - button "All" [ref=e40] [cursor=pointer]
            - button "Jun 2026" [ref=e41] [cursor=pointer]
            - button "May 2026" [ref=e42] [cursor=pointer]
            - button "Apr 2026" [ref=e43] [cursor=pointer]
            - button "Mar 2026" [active] [ref=e44] [cursor=pointer]
            - button "Feb 2026" [ref=e45] [cursor=pointer]
            - button "Jan 2026" [ref=e46] [cursor=pointer]
            - button "Dec 2025" [ref=e47] [cursor=pointer]
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]:
              - generic [ref=e51]:
                - heading "Latest Articles" [level=2] [ref=e52]: Latest Articles
                - paragraph [ref=e54]: 3 posts in Mar 2026
              - generic [ref=e55]: Mar 2026
            - generic [ref=e56]:
              - article [ref=e57] [cursor=pointer]:
                - img "n8n on Google Cloud Run - 2026 | GDG Madurai" [ref=e59]
                - generic [ref=e60]:
                  - generic [ref=e61]:
                    - generic [ref=e62]:
                      - generic [ref=e63]: Technology
                      - generic [ref=e64]:
                        - img [ref=e65]
                        - text: June 5, 2026
                    - heading "n8n on Google Cloud Run - 2026 | GDG Madurai" [level=3] [ref=e67]
                    - paragraph [ref=e68]: Discover how GDG Madurai's "n8n on Google Cloud Run" community event empowered developers, students, and technology enthusiasts to explore workflow automation, cloud-native deployments, and real-world application development. Through expert-led sessions, hands-on demonstrations, and interactive discussions, participants gained practical experience with n8n, Google Cloud Platform, and Telegram bot automation while connecting with the local developer community.
                  - generic [ref=e69]:
                    - generic [ref=e70]:
                      - generic [ref=e71]: Read Full Story
                      - img [ref=e72]
                    - generic [ref=e74]:
                      - img [ref=e75]
                      - generic [ref=e78]: "8"
              - article [ref=e79] [cursor=pointer]:
                - 'img "Build with AI: APL Kickoff" [ref=e81]'
                - generic [ref=e82]:
                  - generic [ref=e83]:
                    - generic [ref=e84]:
                      - generic [ref=e85]: Technology
                      - generic [ref=e86]:
                        - img [ref=e87]
                        - text: May 22, 2026
                    - 'heading "Build with AI: APL Kickoff" [level=3] [ref=e89]'
                    - paragraph [ref=e90]: "Build with AI: Agentic Premier League 2026 Kickoff was a focused, in-person technical session organized by Google Developer Groups (GDG) Madurai and GDG Cloud Madurai. The event aimed to introduce participants to the rapidly evolving ecosystem of Agentic AI, MCP (Model Context Protocol), offline AI systems, and practical AI workflows through real-world demonstrations and interactive discussions."
                  - generic [ref=e91]:
                    - generic [ref=e92]:
                      - generic [ref=e93]: Read Full Story
                      - img [ref=e94]
                    - generic [ref=e96]:
                      - img [ref=e97]
                      - generic [ref=e100]: "6"
              - article [ref=e101] [cursor=pointer]:
                - img "Google I/O Connect Extended 2026 – Exploring the Future of AI, Android & Gemini | GDG Madurai" [ref=e103]
                - generic [ref=e104]:
                  - generic [ref=e105]:
                    - generic [ref=e106]:
                      - generic [ref=e107]: Technology
                      - generic [ref=e108]:
                        - img [ref=e109]
                        - text: May 18, 2026
                    - heading "Google I/O Connect Extended 2026 – Exploring the Future of AI, Android & Gemini | GDG Madurai" [level=3] [ref=e111]
                    - paragraph [ref=e112]: GDG Madurai successfully hosted Google I/O Connect Extended 2026 at UNIK Solutions, Madurai, bringing together developers, students, and AI enthusiasts to explore the latest announcements from Google I/O 2026. The event featured insightful sessions on Android 17, Gemini AI, Agentic AI workflows, cloud technologies, and the future of intelligent developer ecosystems, led by Kabilan Pandidurai and Dhilip S.E. The session encouraged community learning, networking, and discussions around next-generation AI-powered development workflows. Tiny groups of humans gathering in rooms to collectively process the future of artificial intelligence. Somehow still one of the best ways to learn.
                  - generic [ref=e113]:
                    - generic [ref=e114]:
                      - generic [ref=e115]: Read Full Story
                      - img [ref=e116]
                    - generic [ref=e118]:
                      - img [ref=e119]
                      - generic [ref=e122]: "12"
              - article [ref=e123] [cursor=pointer]:
                - img "Agentic AI Open Table" [ref=e125]
                - generic [ref=e126]:
                  - generic [ref=e127]:
                    - generic [ref=e128]:
                      - generic [ref=e129]: Technology
                      - generic [ref=e130]:
                        - img [ref=e131]
                        - text: May 1, 2026
                    - heading "Agentic AI Open Table" [level=3] [ref=e133]
                    - paragraph [ref=e134]: The Agentic AI Open Table, organized by Google Developer Groups Madurai and GDG Cloud Madurai, explored the shift from traditional AI systems to autonomous, decision-making agents. Through industry and academic perspectives, participants gained insights into Agentic AI, Identity AI, and real-world applications.
                  - generic [ref=e135]:
                    - generic [ref=e136]:
                      - generic [ref=e137]: Read Full Story
                      - img [ref=e138]
                    - generic [ref=e140]:
                      - img [ref=e141]
                      - generic [ref=e144]: "44"
              - article [ref=e145] [cursor=pointer]:
                - img "Build with AI - Build for Clean Madurai" [ref=e147]
                - generic [ref=e148]:
                  - generic [ref=e149]:
                    - generic [ref=e150]:
                      - generic [ref=e151]: Technology
                      - generic [ref=e152]:
                        - img [ref=e153]
                        - text: May 1, 2026
                    - heading "Build with AI - Build for Clean Madurai" [level=3] [ref=e155]
                    - paragraph [ref=e156]: The Build with AI – PromptWar Hackathon was a 36-hour intensive innovation sprint organized by Google Developer Group Madurai, in collaboration with Yi Madurai. Hosted at Sethu Institute of Technology, the event brought together students, developers, and innovators to build AI-driven solutions addressing real-world urban challenges under the theme “Clean Madurai.”
                  - generic [ref=e157]:
                    - generic [ref=e158]:
                      - generic [ref=e159]: Read Full Story
                      - img [ref=e160]
                    - generic [ref=e162]:
                      - img [ref=e163]
                      - generic [ref=e166]: "48"
              - article [ref=e167] [cursor=pointer]:
                - img "Build with AI – Build for Clean Madurai | Valedictory" [ref=e169]
                - generic [ref=e170]:
                  - generic [ref=e171]:
                    - generic [ref=e172]:
                      - generic [ref=e173]: Technology
                      - generic [ref=e174]:
                        - img [ref=e175]
                        - text: March 6, 2026
                    - heading "Build with AI – Build for Clean Madurai | Valedictory" [level=3] [ref=e177]
                    - paragraph [ref=e178]: The 36-Hour PromptWar Hackathon – Build with AI, Build for Clean Madurai, organized by GDG Madurai in collaboration with Yi Madurai, concluded with a valedictory ceremony at JC Residency, Madurai, on 7th March 2026, attended by around 50 participants, organizers, and community leaders. The event brought together passionate students who evolved into builders and innovators, developing AI-powered solutions aligned with the Clean Madurai mission. During the ceremony, the top 5 teams presented their solutions, and winners were recognized for their innovation, execution, and real-world impact.
                  - generic [ref=e179]:
                    - generic [ref=e180]:
                      - generic [ref=e181]: Read Full Story
                      - img [ref=e182]
                    - generic [ref=e184]:
                      - img [ref=e185]
                      - generic [ref=e188]: "39"
          - generic [ref=e189]: 🎉 You've caught up with all blogs in this month!
    - contentinfo [ref=e190]:
      - generic [ref=e191]:
        - generic [ref=e192]:
          - generic [ref=e193]:
            - img "OpenMadurAI Logo" [ref=e195]
            - paragraph [ref=e196]: An open-source AI initiative building a global community that democratizes technology through accessible intelligence and collaborative innovation.
          - generic [ref=e197]:
            - heading "Quick Links" [level=3] [ref=e198]
            - list [ref=e199]:
              - listitem [ref=e200]:
                - link "Community" [ref=e201] [cursor=pointer]:
                  - /url: /community
              - listitem [ref=e202]:
                - link "Events" [ref=e203] [cursor=pointer]:
                  - /url: /events
              - listitem [ref=e204]:
                - link "Pride of Madurai" [ref=e205] [cursor=pointer]:
                  - /url: /pride-of-madurai
              - listitem [ref=e206]:
                - link "Alumni Connect" [ref=e207] [cursor=pointer]:
                  - /url: /alumni-connect
          - generic [ref=e208]:
            - heading "Newsletter" [level=3] [ref=e209]
            - paragraph [ref=e210]: Stay ahead with the latest updates from our AI community.
            - generic [ref=e211]:
              - textbox "Enter your email" [ref=e212]
              - button "Subscribe" [ref=e213] [cursor=pointer]
        - generic [ref=e215]:
          - paragraph [ref=e216]: © 2026 OpenMadurAI. All rights reserved. v2
          - generic [ref=e217]:
            - link "Terms and Conditions" [ref=e218] [cursor=pointer]:
              - /url: /terms-and-conditions
            - generic [ref=e219]: 📍 Madurai City
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  |  test.setTimeout(120000);
  3  | 
  4  | test('test', async ({ page }) => {
  5  |   await page.goto('https://openmadurai.org/');
  6  |   await page.getByRole('link', { name: 'Blogs' }).click();
  7  |   await page.waitForLoadState('domcontentloaded');
  8  |   await page.getByText('Read Article').click();
  9  |   await page.goto('https://openmadurai.org/blogs');
  10 |   await page.waitForLoadState('domcontentloaded');
  11 |   await page.getByRole('button', { name: 'Jun' }).click();
  12 |   await page.getByRole('button', { name: 'May' }).click();
  13 |   await page.waitForLoadState('domcontentloaded');
  14 |  await page.getByText('Read Article').click();
  15 |   await page.goto('https://openmadurai.org/blogs');
  16 |   await page.getByRole('button', { name: 'Apr' }).click();
  17 |   await page.getByRole('button', { name: 'Mar' }).click();
  18 |   await page.waitForLoadState('domcontentloaded');
> 19 |   await page.getByText('Read Article').click();
     |                                        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  20 |   await expect(page.locator('body')).toBeVisible();
  21 |   await page.goto('https://openmadurai.org/blogs');
  22 |   await page.getByRole('button', { name: 'Feb' }).click();
  23 |   await page.getByRole('button', { name: 'Jan' }).click();
  24 |   await page.waitForLoadState('domcontentloaded');
  25 |   await page.getByText('Read Article').click();
  26 |   await page.goto('https://openmadurai.org/blogs');
  27 |   await page.waitForLoadState('domcontentloaded');
  28 |   await expect(page.locator('body')).toBeVisible()
  29 |   await page.getByRole('button', { name: 'Dec' }).click();
  30 | });
```