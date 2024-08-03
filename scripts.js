let noClickCount = 0;

function showLove() {
    alert('I love you too');
    // window.open('https://youtube.com/shorts/kz7atI5rJV0?si=WYa1Y-VV_ZjTgLje', '_blank');
}

function handleNoClick() {
    noClickCount++;
    if (noClickCount >= 3) {
        window.open('https://youtu.be/AF8m2I1lU2I?si=3PHCr-B4J3-S5HUP', '_blank');
    }
}

function moveButton(button) {
    const box = document.querySelector('.box');
    const boxRect = box.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();
    
    const offsetX = (Math.random() - 0.5) * 200;
    const offsetY = (Math.random() - 0.5) * 200;

    let newLeft = btnRect.left + offsetX;
    let newTop = btnRect.top + offsetY;

    if (newLeft < boxRect.left || newLeft + btnRect.width > boxRect.right) {
        newLeft = boxRect.left + (Math.random() * (boxRect.width - btnRect.width));
    }

    if (newTop < boxRect.top || newTop + btnRect.height > boxRect.bottom) {
        newTop = boxRect.top + (Math.random() * (boxRect.height - btnRect.height));
    }

    button.style.position = 'absolute';
    button.style.left = `${newLeft - boxRect.left}px`;
    button.style.top = `${newTop - boxRect.top}px`;
}
