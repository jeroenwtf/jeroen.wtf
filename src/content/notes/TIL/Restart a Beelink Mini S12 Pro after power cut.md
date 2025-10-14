---
status: draft
modified: 2025-10-14T12:36:50+02:00
created: 2025-10-14T12:24:18+02:00
---

To set up the mini PC to turn on automatically after, for example, a power outage.

1. Access the BIOS (press `DEL` or `F7` on boot).
2. Go to the "Chipset" tab and then "PCH-IO Configuration".
3. In "State after G3", select "S0 State".
4. Save and reboot.

You can test it by unplugging the mini PC and plugging it again.

For a bit of context, G3 state is **mechanical off** (M-Off). S0 state would be **full on** and S5 is a **soft off** (that's the change applied, to transition to S0 instad of S5).