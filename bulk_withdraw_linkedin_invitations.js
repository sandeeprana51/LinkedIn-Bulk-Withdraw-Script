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
