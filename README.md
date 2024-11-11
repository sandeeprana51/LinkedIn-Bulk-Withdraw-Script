Here's a complete `README.md` file for your LinkedIn Bulk Withdraw Script repository:

---

# LinkedIn Bulk Withdraw Invitations Script

This repository contains a JavaScript script that automates the bulk withdrawal of pending connection invitations on LinkedIn. The script can be executed directly in the browser's Developer Console, allowing users to withdraw multiple invitations quickly without manual effort.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Setup and Usage](#setup-and-usage)
- [Limitations](#limitations)
- [Troubleshooting](#troubleshooting)
- [Disclaimer](#disclaimer)

## Description

Managing pending LinkedIn invitations one by one can be time-consuming. This script simplifies the process by automating the withdrawal of sent connection invitations in bulk. It scrolls through the "Sent Invitations" page on LinkedIn, identifies "Withdraw" buttons for each pending invitation, and clicks to confirm the action.

## Features

- Loads pending invitations automatically by scrolling through the page.
- Identifies and clicks "Withdraw" buttons for each pending invitation.
- Confirms each withdrawal through LinkedIn's confirmation popup.
- Logs the number of invitations withdrawn for tracking.

## Requirements

- **Browser**: Use a browser with Developer Tools (e.g., Chrome, Firefox).
- **LinkedIn Account**: Make sure you’re logged in to LinkedIn before running the script.

## Setup and Usage

### Step 1: Open LinkedIn Invitations Page

1. Log into your LinkedIn account.
2. Go to the [Sent Invitations](https://www.linkedin.com/mynetwork/invitation-manager/sent/) page.

### Step 2: Open Developer Console

1. Press `F12` or `Ctrl + Shift + J` (on Windows) or `Cmd + Option + J` (on Mac) to open the Developer Console in your browser.

### Step 3: Copy and Run the Script

1. Copy the code below and paste it into the Developer Console:

    ```javascript
    (async function bulkWithdrawLinkedInInvitations() {
        console.log("Starting bulk withdrawal of LinkedIn invitations...");

        // Scroll to the bottom of the page multiple times to load all invitations
        for (let i = 0; i < 10; i++) {
            window.scrollTo(0, document.body.scrollHeight);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for invitations to load
        }

        // Get all 'Withdraw' buttons
        let withdrawButtons = Array.from(document.querySelectorAll("button")).filter(btn => btn.innerText.includes("Withdraw"));
        let withdrawnCount = 0;

        for (const button of withdrawButtons) {
            try {
                // Click on the 'Withdraw' button
                button.click();
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for confirmation dialog to appear

                // Click the confirm 'Withdraw' button in the dialog
                const confirmButton = document.querySelector("button.artdeco-button--primary");
                if (confirmButton && confirmButton.innerText.includes("Withdraw")) {
                    confirmButton.click();
                    withdrawnCount++;
                    console.log(`Invitation withdrawn: ${withdrawnCount}`);
                    await new Promise(resolve => setTimeout(resolve, 1500)); // Short delay before the next action
                }
            } catch (error) {
                console.log("Error withdrawing invitation:", error);
            }
        }

        console.log(`Total invitations withdrawn: ${withdrawnCount}`);
    })();
    ```

2. Press `Enter` to execute the script.
3. The script will scroll through the page, identify, and withdraw each pending invitation. Each withdrawal is logged in the console.

## Limitations

- **LinkedIn Rate Limits**: LinkedIn may limit actions temporarily if too many invitations are withdrawn in a short period. If this occurs, wait a few minutes and run the script again.
- **Manual Execution**: This script requires you to open the Developer Console and paste it each time you wish to run it. 

## Troubleshooting

- **Buttons Not Found**: If the script is unable to find "Withdraw" buttons, LinkedIn may have updated its page layout. Check for updates to the script in this repository or adjust the selectors in the script to match LinkedIn’s new layout.
- **Rate Limits**: If you receive an error or notice withdrawals are temporarily restricted, allow some time before running the script again.

## Disclaimer

This script is for educational purposes and personal use only. Excessive use of automated actions may violate LinkedIn's terms of service. Please use responsibly to avoid action limitations or account suspension.

--- 

This README provides a clear guide on the script's purpose, setup, and usage, as well as limitations and troubleshooting tips. Let me know if there’s anything else you’d like to include!
