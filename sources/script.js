const btn = document.getElementById('btn');
        const box = document.getElementById('box');

        btn.onclick = (e) => {
            box.classList.toggle('show');
            e.stopPropagation();
        };

        window.onclick = () => box.classList.remove('show');
        box.onclick = (e) => e.stopPropagation();