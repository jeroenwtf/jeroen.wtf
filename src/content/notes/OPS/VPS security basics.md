---
status: draft
modified: 2024-11-29T16:58:29+01:00
created: 2024-08-22T15:19:49+02:00
---

This is a short list of things to take into account to have some basic security in a VPS.


## Regular system updates

- Use `sudo apt update && sudo apt upgrade` regularly to fetch and apply updates.
- For kernel updates, use `sudo apt full-upgrade` to ensure all packages are updated.
- Clean up with `sudo apt autoremove` to remove unnecessary packages.


## Enable unattended upgrades

Used for ensuring your Ubuntu server automatically installs security updates without manual intervention.

Install with `unattended-upgrades`.

```bash
sudo apt install unattended-upgrades
```

Configure by editing `/etc/apt/apt.conf.d/50unattended-upgrades` to suit your needs.


### To check if it's working

You can check the timestamp files.

```bash
ls -l /var/lib/apt/periodic/
```

Or manually run a test:

```bash
sudo unattended-upgrade --dry-run --debug
```

Logs are located at `/var/log/unattended-upgrades/`.