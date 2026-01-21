document.addEventListener("DOMContentLoaded", function () {
    const joinNowBtn = document.getElementById("joinNowBtn");
    const learnMoreBtn = document.getElementById("learn-more");

    if (joinNowBtn) {
        joinNowBtn.addEventListener("click", function () {
            Swal.fire({
                title: "Welcome to PC Game Pass!",
                html: '<canvas id="canvas" width="200" height="200"></canvas>',
                showConfirmButton: true,
                confirmButtonColor: "#0e7c00",
                confirmButtonText: "Start Playing",
                didOpen: () => {
                    const canvas = document.getElementById("canvas");
                    const ctx = canvas.getContext("2d");
                    drawXboxLogo(ctx); // Draw logo on canvas
                }
            });
        });
    }

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            Swal.fire({
                title: "Credits",
                html: `
                    <p><strong>Author:</strong> Žiga Černe Bralić</p>
                `,
                icon: "info",
                confirmButtonColor: "#0e7c00",
                confirmButtonText: "Close"
            });
        });
    }
});
