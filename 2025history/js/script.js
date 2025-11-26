class MemoryTimeline {
    constructor() {
        this.months = [
            'january', 'february', 'march', 'april', 'may', 'june',
            'july', 'august', 'september', 'october', 'november', 'december'
        ];
        
        this.monthNames = {
            'january': '1월',
            'february': '2월', 
            'march': '3월',
            'april': '4월',
            'may': '5월',
            'june': '6월',
            'july': '7월',
            'august': '8월',
            'september': '9월',
            'october': '10월',
            'november': '11월',
            'december': '12월'
        };

        // 실제 존재하는 파일들 정의 (완전 업데이트)
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
                'image-2025-6-18_19-44-35 (1).png',
                'image-2025-6-18_19-44-35 (2).png',
                'image-2025-6-18_19-44-35 (3).png',
                'image-2025-6-18_19-44-35.png'
            ],
            may: [
                'image-2025-6-18_19-44-10 (1).png',
                'image-2025-6-18_19-44-10 (2).png',
                'image-2025-6-18_19-44-10 (3).png',
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
                // JPG 파일들만 포함 (HEIC는 브라우저에서 표시 안됨)
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
            ]
        };

        this.init();
    }

    init() {
        this.setupScrollAnimation();
        this.loadAllPhotos();
        this.setupModal();
        
        setTimeout(() => {
            this.animateTimelineItems();
        }, 500);
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

        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });
    }

    animateTimelineItems() {
        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        });
    }

    async loadAllPhotos() {
        console.log('📸 월별 사진 로드 시작...');
        for (const month of this.months) {
            await this.loadPhotosForMonth(month);
        }
        console.log('✅ 모든 사진 로드 완료!');
    }

    async loadPhotosForMonth(month) {
        const gallery = document.getElementById(`gallery-${month}`);
        if (!gallery) return;

        // 해당 월에 실제 파일이 있는지 확인
        const files = this.actualFiles[month] || [];
        
        if (files.length === 0) {
            gallery.innerHTML = `
                <div class="no-photos">
                    아직 ${this.monthNames[month]} 사진이 없어요 📷<br>
                    <small>images/${month}/ 폴더에 사진을 추가해보세요!</small>
                </div>
            `;
            console.log(`📂 ${this.monthNames[month]}: 사진 없음`);
            return;
        }

        console.log(`🔄 ${this.monthNames[month]} 사진 로드 중... (${files.length}개)`);

        // 사진 갤러리 생성
        const photosHtml = files.map((filename, index) => {
            const caption = this.generateCaption(filename, index + 1, this.monthNames[month]);
            return `
                <div class="photo-item" data-month="${month}" data-photo="${filename}">
                    <img src="images/${month}/${encodeURIComponent(filename)}" 
                         alt="${caption}" 
                         loading="lazy"
                         onerror="this.parentElement.style.display='none'">
                    <div class="photo-overlay">
                        <div class="photo-caption">${caption}</div>
                    </div>
                </div>
            `;
        }).join('');

        gallery.innerHTML = photosHtml;

        // 사진 클릭 이벤트 설정
        gallery.querySelectorAll('.photo-item').forEach(item => {
            item.addEventListener('click', () => this.openModal(item));
        });

        console.log(`✅ ${this.monthNames[month]}: ${files.length}개 사진 로드 완료!`);
    }

    // 파일명을 기반으로 적절한 캡션 생성 (업데이트됨)
    generateCaption(filename, index, monthName) {
        const lowerFilename = filename.toLowerCase();
        
        // 특별한 키워드가 있는 경우 맞춤 캡션
        if (lowerFilename.includes('메타버스')) {
            return `${monthName} 메타버스 엑스포 ${index}`;
        } else if (lowerFilename.includes('shared')) {
            return `${monthName} 함께한 순간 ${index}`;
        } else if (lowerFilename.includes('july')) {
            return `${monthName} 여름 추억 ${index}`;
        } else if (lowerFilename.includes('미디어')) {
            return `${monthName} 미디어 활동`;
        } else if (lowerFilename.includes('2025032')) {
            return `${monthName} 팀 활동 ${index}`;
        } else if (lowerFilename.includes('20250825')) {
            return `${monthName} 여름 마무리 ${index}`;
        } else if (lowerFilename.includes('img_4')) {
            return `${monthName} 가을 추억 ${index}`;
        } else if (lowerFilename.includes('re1')) {
            return `${monthName} 특별한 순간`;
        } else if (lowerFilename.includes('image-2025-8')) {
            return `${monthName} 프로젝트 활동 ${index}`;
        } else if (lowerFilename.includes('image-2025-9')) {
            return `${monthName} 가을 시작 ${index}`;
        } else if (lowerFilename.includes('image-2025')) {
            return `${monthName} 프로젝트 활동 ${index}`;
        } else {
            return `${monthName} 추억 ${index}`;
        }
    }

    setupModal() {
        const modal = document.getElementById('imageModal');
        
        // 모달 HTML이 비어있다면 추가
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

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    new MemoryTimeline();
});