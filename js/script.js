class PraiseBalloon {
    constructor() {
        this.balloons = [];
        this.balloonColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'white'];
        this.animations = ['floatAround', 'floatLeft', 'floatRight', 'floatCircle'];
        this.preloadedData = [];
        this.currentSearchResults = [];
        this.currentMessageIndex = 0;
        this.init();
    }

    async init() {
        const searchBtn = document.getElementById('searchBtn');
        const nameSearch = document.getElementById('nameSearch');
        
        // 모달 관련 요소들
        const searchModal = document.getElementById('searchModal');
        const messagesModal = document.getElementById('messagesModal');
        const praiseModal = document.getElementById('praiseModal');
        
        const searchClose = document.getElementById('searchClose');
        const messagesClose = document.getElementById('messagesClose');
        const praiseClose = document.querySelector('#praiseModal .close');
        
        const viewMessagesBtn = document.getElementById('viewMessagesBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        // 미리 작성된 데이터 로드
        await this.loadPresetData();
        
        // 자동으로 풍선들 한번에 띄우기
        this.loadAllBalloonsAtOnce();

        // 검색 이벤트
        searchBtn.addEventListener('click', () => this.searchName());
        nameSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchName();
        });

        // 모달 닫기 이벤트
        searchClose.addEventListener('click', () => this.closeModal('search'));
        messagesClose.addEventListener('click', () => this.closeModal('messages'));
        praiseClose.addEventListener('click', () => this.closeModal('praise'));

        // 모달 배경 클릭으로 닫기
        [searchModal, messagesModal, praiseModal].forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id.replace('Modal', ''));
                }
            });
        });

        // 메시지 보기 이벤트
        viewMessagesBtn.addEventListener('click', () => this.showMessages());
        prevBtn.addEventListener('click', () => this.previousMessage());
        nextBtn.addEventListener('click', () => this.nextMessage());

        // ESC 키로 모달 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    async loadPresetData() {
        try {
            const response = await fetch('data/praise-data.json');
            const data = await response.json();
            this.preloadedData = data.praises;
            console.log('🎈 미리 작성된 칭찬 데이터를 로드했습니다!', this.preloadedData.length, '개');
        } catch (error) {
            console.log('❌ 데이터 로드 실패, 기본 데이터를 사용합니다.');
            // 기본 데이터 (JSON 파일이 없을 경우)
            this.preloadedData = [
                { name: "김민수", praise: "항상 웃는 모습이 너무 아름다워요! 😊" },
                { name: "김민수", praise: "배려심이 깊어서 함께 있으면 마음이 따뜻해져요 💝" },
                { name: "이영희", praise: "열정적인 모습이 정말 멋있어요! 🔥" },
                { name: "이영희", praise: "세심하고 꼼꼼한 성격이 정말 존경스러워요 ✨" },
                { name: "박철수", praise: "밝은 에너지로 주변을 행복하게 만들어요! 🌟" },
                { name: "최지은", praise: "책임감이 강해서 믿음직스러워요 💪" },
                { name: "정다현", praise: "창의적인 아이디어가 항상 놀라워요! 💡" },
                { name: "임태민", praise: "유머감각이 뛰어나서 함께 있으면 즐거워요 😄" }
            ];
        }
    }

    loadAllBalloonsAtOnce() {
        // 모든 미리 작성된 데이터를 한번에 로드
        this.preloadedData.forEach((data, index) => {
            // 각 풍선마다 조금씩 다른 타이밍으로 등장 애니메이션 적용
            setTimeout(() => {
                const balloon = this.createBalloonElement(data.name, data.praise);
                this.balloons.push({ 
                    name: data.name, 
                    praise: data.praise, 
                    element: balloon,
                    isPreloaded: true 
                });
            }, index * 200); // 0.2초씩 차이를 둬서 자연스럽게 등장
        });
        
        console.log('🎈 모든 미리 작성된 칭찬을 한번에 로드합니다!');
    }

    searchName() {
        const nameSearch = document.getElementById('nameSearch');
        const searchName = nameSearch.value.trim();

        if (!searchName) {
            alert('검색할 이름을 입력해주세요! 🔍');
            return;
        }

        // 해당 이름의 메시지들 찾기
        this.currentSearchResults = this.preloadedData.filter(data => 
            data.name.includes(searchName) || searchName.includes(data.name)
        );

        if (this.currentSearchResults.length === 0) {
            alert(`"${searchName}"님에 대한 칭찬 메시지를 찾을 수 없어요 😢\n다른 이름으로 검색해보세요!`);
            return;
        }

        // 검색 결과 모달 표시
        this.showSearchResults(searchName, this.currentSearchResults.length);
    }

    showSearchResults(name, count) {
        const modal = document.getElementById('searchModal');
        const title = document.getElementById('searchResultTitle');
        const countText = document.getElementById('searchResultCount');

        title.textContent = `${name}님 검색 결과`;
        countText.textContent = `🎉 ${count}개의 칭찬 메시지가 있습니다!`;
        
        modal.style.display = 'block';
    }

    showMessages() {
        this.closeModal('search');
        this.currentMessageIndex = 0;
        
        const modal = document.getElementById('messagesModal');
        const title = document.getElementById('messagesTitle');
        
        title.textContent = `${this.currentSearchResults[0].name}님에게 온 칭찬들`;
        
        this.updateMessageDisplay();
        modal.style.display = 'block';
    }

    updateMessageDisplay() {
        const messageText = document.getElementById('currentMessage');
        const counter = document.getElementById('messageCounter');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        const current = this.currentSearchResults[this.currentMessageIndex];
        messageText.textContent = current.praise;
        counter.textContent = `${this.currentMessageIndex + 1} / ${this.currentSearchResults.length}`;

        // 버튼 활성화/비활성화
        prevBtn.disabled = this.currentMessageIndex === 0;
        nextBtn.disabled = this.currentMessageIndex === this.currentSearchResults.length - 1;
    }

    previousMessage() {
        if (this.currentMessageIndex > 0) {
            this.currentMessageIndex--;
            this.updateMessageDisplay();
        }
    }

    nextMessage() {
        if (this.currentMessageIndex < this.currentSearchResults.length - 1) {
            this.currentMessageIndex++;
            this.updateMessageDisplay();
        }
    }

    createBalloonElement(name, praise) {
        const container = document.getElementById('balloonsContainer');
        const balloon = document.createElement('div');
        
        // 랜덤 색깔과 애니메이션 선택
        const randomColor = this.balloonColors[Math.floor(Math.random() * this.balloonColors.length)];
        const randomAnimation = this.animations[Math.floor(Math.random() * this.animations.length)];
        
        balloon.className = `balloon ${randomColor}`;
        
        // 랜덤 위치 (풍선이 컨테이너 밖으로 나가지 않도록 조정)
        const maxWidth = Math.max(container.offsetWidth - 240, 100);
        const maxHeight = Math.max(container.offsetHeight - 300, 100);
        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;
        const randomDelay = Math.random() * 3;
        const randomDuration = 8 + Math.random() * 6;

        balloon.style.left = randomX + 'px';
        balloon.style.top = randomY + 'px';
        balloon.style.animationName = randomAnimation;
        balloon.style.animationDelay = randomDelay + 's';
        balloon.style.animationDuration = randomDuration + 's';
        
        // 클릭 이벤트 - 기존 개별 칭찬 보기
        balloon.addEventListener('click', () => {
            this.showPraiseModal(name, praise);
        });

        // 마우스 호버 효과
        balloon.addEventListener('mouseenter', () => {
            balloon.style.transform = 'scale(1.2)';
            balloon.style.zIndex = '10';
        });

        balloon.addEventListener('mouseleave', () => {
            balloon.style.transform = 'scale(1)';
            balloon.style.zIndex = '1';
        });

        container.appendChild(balloon);
        
        // 등장 애니메이션
        balloon.style.opacity = '0';
        balloon.style.transform = 'translateY(50px) scale(0.5)';
        
        setTimeout(() => {
            balloon.style.transition = 'opacity 0.8s, transform 0.8s';
            balloon.style.opacity = '1';
            balloon.style.transform = 'translateY(0) scale(1)';
        }, 100);

        return balloon;
    }

    showPraiseModal(name, praise) {
        const modal = document.getElementById('praiseModal');
        const modalName = document.getElementById('modalName');
        const modalPraise = document.getElementById('modalPraise');

        modalName.textContent = name + '님';
        modalPraise.textContent = praise;
        modal.style.display = 'block';
    }

    closeModal(type) {
        const modal = document.getElementById(type + 'Modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    closeAllModals() {
        ['search', 'messages', 'praise'].forEach(type => {
            this.closeModal(type);
        });
    }

    // 유틸리티 함수들
    clearAllBalloons() {
        this.balloons.forEach(balloon => {
            if (balloon.element && balloon.element.parentNode) {
                balloon.element.parentNode.removeChild(balloon.element);
            }
        });
        this.balloons = [];
    }

    reloadPresetData() {
        this.clearAllBalloons();
        this.loadAllBalloonsAtOnce();
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.praiseBalloon = new PraiseBalloon();
    
    // 환영 메시지
    setTimeout(() => {
        console.log('🎈 칭찬합시다! 웹사이트에 오신 것을 환영합니다! 🎈');
        console.log('💡 이름을 검색해서 칭찬 메시지들을 확인해보세요!');
    }, 1000);
});