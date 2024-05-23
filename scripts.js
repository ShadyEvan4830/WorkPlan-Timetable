document.addEventListener('DOMContentLoaded', function() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.addEventListener('click', () => {
            task.classList.toggle('expanded');
        });
    });
});
