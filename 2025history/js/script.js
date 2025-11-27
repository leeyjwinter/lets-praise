class MemoryTimeline {
    constructor() {
        this.months = [
            'january', 'february', 'march', 'april', 'may', 'june',
            'july', 'august', 'september', 'october', 'november', 'december'
        ];
        
        // 🎯 monthNames에 활동명 포함
        this.monthNames = {
            'january': '1월',
            'february': '2월 - REINVENT DAY (보드게임, 볼링)', 
            'march': '3월 - REINVENT DAY (DX 활동, UD 체험실, 보안엑스포)',
            'april': '4월 - REINVENT DAY (People Skill, 일등조직만들기 워크샵)',
            'may': '5월 - 담당 REINVENT DAY',
            'june': '6월 - REINVENT DAY (메타버스 엑스포)',
            'july': '7월 - REINVENT DAY (Life.zip 집들2)',
            'august': '8월 - REINVENT DAY (안전체험관 방문)',
            'september': '9월 - REINVENT DAY (컬쳐위크)',
            'october': '10월 - 팀 야유회 (아쿠아리움, 방탈출)',
            'november': '11월 - 한 해 마무리 활동',
            'december': '12월'
        };

        // ✅ 실제 파일 구조에 맞게 수정 (12월 제외)
        this.actualFiles = {
            february: [
                '미디어 (5).jpg',
                'image-2025-3-14_11-42-11.png',
                'image-2025-3-14_11-42-2.png',
                'image-2025-3-14_11-42-58.png',
                'image-2025-3-14_11-43-2.png'
            ],
            march: [
                '20250321_134603851.jpg',
                '20250321_141256.jpg',
                '20250321_141640.jpg',
                '20250321_141755.jpg',
                '20250321_141948.jpg',
                '20250321_142407.jpg',
                '20250321_143223.jpg',
                '20250321_144230.jpg',
                '20250321_150826.jpg'
            ],
            april: [
                'image-2025-6-18_19-44-35.png'
            ],
            may: [
                'image-2025-6-18_19-44-10.png'
            ],
            june: [
                '20250620_메타버스엑스포 (1).jpg',
                '20250620_메타버스엑스포 (2).jpg',
                '20250620_메타버스엑스포 (3).jpg',
                '20250620_메타버스엑스포 (4).jpg',
                'shared image (1).jpeg',
                'shared image (2).jpeg',
                'shared image (3).jpeg',
                'shared image (4).jpeg',
                'shared image (5).jpeg'
            ],
            july: [
                'july1.png',
                'july2.png',
                'july3.png',
                'july4.png',
                'july5.png',
                'july6.png'
            ],
            august: [
                '20250825_161758.jpg',
                '20250825_162832.jpg',
                'image-2025-8-29_16-16-18.png',
                'image-2025-8-29_16-16-2.png',
                're1.jpg'
            ],
            september: [
                'image-2025-9-28_14-45-43.png',
                'image-2025-9-29_12-50-35.png',
                'image-2025-9-29_8-39-45.png',
                'image-2025-9-8_11-0-24.png'
            ],
            october: [
                'IMG_4431.JPG',
                'IMG_4432.JPG',
                'IMG_4433.JPG',
                'IMG_4434.JPG',
                'IMG_4435.JPG',
                'IMG_4436.JPG',
                'IMG_4437.JPG',
                'IMG_4438.JPG',
                'IMG_4439.JPG',
                'IMG_4440.JPG',
                'IMG_4441.JPG',
                'IMG_4442.JPG',
                'IMG_4443.JPG',
                'IMG_4444.JPG',
                'IMG_4445.JPG',
                'IMG_4446.JPG',
                'IMG_4448.JPG',
                'IMG_4449.JPG',
                'IMG_4450.JPG',
                'IMG_4451.JPG',
                'IMG_4452.JPG',
                'IMG_4453.JPG',
                'IMG_4454.JPG',
                'IMG_4455.JPG',
                'IMG_4456.JPG',
                'IMG_4457.JPG',
                'IMG_4458.JPG',
                'IMG_4459.JPG',
                'IMG_4460.JPG',
                'IMG_4461.JPG',
                'IMG_4462.JPG',
                'IMG_4463.JPG',
                'IMG_4464.JPG',
                'IMG_4465.JPG',
                'IMG_4466.JPG',
                'IMG_4467.JPG',
                'IMG_4468.JPG',
                'IMG_4469.JPG',
                'IMG_4470.JPG',
                'IMG_4471.JPG',
                'IMG_4472.JPG',
                'IMG_4473.JPG',
                'IMG_4474.JPG',
                'IMG_4475.JPG',
                'IMG_4476.JPG',
                'IMG_4477.JPG',
                'IMG_4478.JPG',
                'IMG_4479.JPG',
                'IMG_4480.JPG',
                'IMG_4481.JPG',
                'IMG_4482.JPG',
                'IMG_4483.JPG',
                'IMG_4484.JPG',
                'IMG_4485.JPG',
                'IMG_4486.JPG',
                'IMG_4487.JPG',
                'IMG_4488.JPG',
                'IMG_4489.JPG',
                'IMG_4490.JPG',
                'IMG_4491.JPG',
                'IMG_4492.JPG',
                'IMG_4493.JPG',
                'IMG_4494.JPG',
                'IMG_4495.JPG',
                'IMG_4496.JPG',
                'IMG_4497.JPG',
                'IMG_4498.JPG',
                'IMG_4501.JPG',
                'IMG_4502.JPG',
                'IMG_4503.JPG',
                'IMG_4504.JPG',
                'IMG_4505.JPG',
                'IMG_4506.JPG',
                'IMG_4507.JPG',
                'IMG_4508.JPG',
                'IMG_4509.JPG',
                'IMG_4510.JPG',
                'IMG_4524.JPG',
                'IMG_4525.JPG',
                'IMG_4526.JPG',
                'IMG_4527.JPG'
            ],
            november: [
                '미디어 (3).jpeg'
            ]
            // 🚫 12월 제거 - 배너로 처리
        };

        this.init();
    }

    init() {
        this.updateMonthTitles();
        this.hideEmptyMonths();
        this.setupScrollAnimation();
        this.loadAllPhotos();
        this.setupModal();
        
        setTimeout(() => {
            this.animateTimelineItems();
            this.createGroupPhotoBanner(); // 🔄 맨 밑으로 이동
        }, 500);
    }

    // 🔄 단체사진 배너 생성 (맨 밑에 추가)
    createGroupPhotoBanner() {
        const timelineContainer = document.querySelector('.timeline-container');
        
        // 배너 HTML 생성
        const bannerHtml = `
            <div class="group-photo-banner">
                <div class="banner-content">
                    <h2 class="banner-title">2025년 우리들의 추억</h2>
                    <p class="banner-subtitle">함께한 모든 순간들이 소중한 기억이 되었습니다</p>
                    <div class="group-photo-container">
                        <img src="../images/december/together.jpeg" 
                             alt="2025년 단체사진" 
                             class="group-photo"
                             onclick="this.classList.toggle('enlarged')">
                    </div>
                    <p class="banner-message">고생 많으셨고, 내년에도 함께 좋은 추억 만들어요! 🎉</p>
                </div>
            </div>
        `;
        
        // 🔄 타임라인 맨 밑에 배너 추가
        timelineContainer.insertAdjacentHTML('beforeend', bannerHtml);
        
        console.log('🖼️ 단체사진 배너 생성 완료! (맨 밑)');
    }

    updateMonthTitles() {
        console.log('📝 월별 제목 업데이트 중...');
        
        this.months.forEach(month => {
            const timelineItem = document.querySelector(`[data-month="${month}"]`);
            if (timelineItem) {
                const h2Element = timelineItem.querySelector('h2');
                if (h2Element) {
                    h2Element.textContent = this.monthNames[month];
                }
            }
        });
        
        console.log('✅ 월별 제목 업데이트 완료!');
    }

    hideEmptyMonths() {
        console.log('🔍 사진이 없는 달 숨기는 중...');
        
        this.months.forEach(month => {
            const files = this.actualFiles[month] || [];
            const timelineItem = document.querySelector(`[data-month="${month}"]`);
            
            if (files.length === 0 && timelineItem) {
                timelineItem.style.display = 'none';
                console.log(`🚫 ${this.monthNames[month]} 숨김 (사진 없음)`);
            } else if (files.length > 0 && timelineItem) {
                console.log(`✅ ${this.monthNames[month]} 표시 (${files.length}개 사진)`);
            }
        });
    }

    setupScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.timeline-item:not([style*="display: none"])').forEach(item => {
            observer.observe(item);
        });
    }

    animateTimelineItems() {
        const visibleItems = document.querySelectorAll('.timeline-item:not([style*="display: none"])');
        visibleItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        });
    }

    async loadAllPhotos() {
        console.log('📸 월별 사진 로드 시작...');
        
        const monthsWithPhotos = this.months.filter(month => {
            const files = this.actualFiles[month] || [];
            return files.length > 0;
        });
        
        console.log(`📂 사진이 있는 달: ${monthsWithPhotos.length}개월`);
        
        for (const month of monthsWithPhotos) {
            await this.loadPhotosForMonth(month);
        }
        console.log('✅ 모든 사진 로드 완료!');
    }

    async loadPhotosForMonth(month) {
        const gallery = document.getElementById(`gallery-${month}`);
        if (!gallery) return;

        const files = this.actualFiles[month] || [];
        
        if (files.length === 0) {
            return;
        }

        console.log(`🔄 ${this.monthNames[month]} 사진 로드 중... (${files.length}개)`);

        const photosHtml = files.map((filename, index) => {
            const caption = this.generateCaption(filename, index + 1, month);
            const encodedFilename = encodeURIComponent(filename);
            
            return `
                <div class="photo-item" data-month="${month}" data-photo="${filename}">
                    <img src="images/${month}/${encodedFilename}" 
                         alt="${caption}" 
                         loading="lazy"
                         onerror="console.error('이미지 로드 실패:', '${encodedFilename}'); this.parentElement.style.display='none'">
                    <div class="photo-overlay">
                        <div class="photo-caption">${caption}</div>
                    </div>
                </div>
            `;
        }).join('');

        gallery.innerHTML = photosHtml;

        gallery.querySelectorAll('.photo-item').forEach(item => {
            item.addEventListener('click', () => this.openModal(item));
        });

        console.log(`✅ ${this.monthNames[month]}: ${files.length}개 사진 로드 완료!`);
    }

    generateCaption(filename, index, month) {
        const lowerFilename = filename.toLowerCase();
        const monthNumber = this.months.indexOf(month) + 1;
        
        if (lowerFilename.includes('메타버스')) {
            return `${monthNumber}월 메타버스 엑스포 ${index}`;
        } else if (lowerFilename.includes('shared')) {
            return `${monthNumber}월 함께한 순간 ${index}`;
        } else if (lowerFilename.includes('july')) {
            return `${monthNumber}월 Life.zip 집들2 ${index}`;
        } else if (lowerFilename.includes('미디어')) {
            if (month === 'november') {
                return `${monthNumber}월 마무리 활동`;
            }
            return `${monthNumber}월 미디어 활동`;
        } else if (lowerFilename.includes('2025032')) {
            return `${monthNumber}월 DX활동 & 보안엑스포 ${index}`;
        } else if (lowerFilename.includes('20250825')) {
            return `${monthNumber}월 안전체험관 방문 ${index}`;
        } else if (lowerFilename.includes('img_4')) {
            return `${monthNumber}월 팀 야유회 ${index}`;
        } else if (lowerFilename.includes('re1')) {
            return `${monthNumber}월 안전체험관 특별 체험`;
        } else if (lowerFilename.includes('image-2025-8')) {
            return `${monthNumber}월 안전체험관 활동 ${index}`;
        } else if (lowerFilename.includes('image-2025-9')) {
            return `${monthNumber}월 컬쳐위크 ${index}`;
        } else if (month === 'april') {
            return `${monthNumber}월 People Skill 워크샵 ${index}`;
        } else if (month === 'may') {
            return `${monthNumber}월 담당 REINVENT DAY ${index}`;
        } else {
            return `${monthNumber}월 추억 ${index}`;
        }
    }

    setupModal() {
        const modal = document.getElementById('imageModal');
        
        if (!modal.querySelector('.modal-content')) {
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img class="modal-image" id="modalImage">
                    <div class="modal-caption" id="modalCaption"></div>
                </div>
            `;
        }

        const modalImage = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        const closeBtn = modal.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }

    openModal(photoItem) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        
        const img = photoItem.querySelector('img');
        const caption = photoItem.querySelector('.photo-caption').textContent;
        
        modalImage.src = img.src;
        modalCaption.textContent = caption;
        modal.style.display = 'block';
        
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MemoryTimeline();
});