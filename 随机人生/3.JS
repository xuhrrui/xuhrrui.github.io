document.getElementById('birthdayForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const birthdayInput = document.getElementById('birthday');
    const birthday = new Date(birthdayInput.value);
    if (isNaN(birthday.getTime())) {
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        generateLifeTrajectory();
        document.getElementById('lifeTrajectory').style.display = 'block';
        document.getElementById('resetButton').style.display = 'block';
    }, 2000);
});

document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('birthday').value = '';
    document.getElementById('lifeTrajectory').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';
});

function generateLifeTrajectory() {
    const occupations = ['软件工程师', '医生', '教师', '艺术家', '运动员', '企业家', '记者'];
    const achievements = ['获得行业大奖', '发表知名学术论文', '创办成功企业', '打破世界纪录', '举办个人画展'];
    const maritalStatuses = ['已婚', '未婚', '离异'];
    const wealthLevels = ['富有', '小康', '普通', '贫困'];

    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomAchievement = achievements[Math.floor(Math.random() * achievements.length)];
    const randomMaritalStatus = maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)];
    const randomWealthLevel = wealthLevels[Math.floor(Math.random() * wealthLevels.length)];

    document.getElementById('occupation').textContent = randomOccupation;
    document.getElementById('achievement').textContent = randomAchievement;
    document.getElementById('maritalStatus').textContent = randomMaritalStatus;
    document.getElementById('wealthLevel').textContent = randomWealthLevel;

    const bgm = document.getElementById('bgm');
    bgm.src = 'bgm.mp3';
    bgm.load();
    bgm.play();
}