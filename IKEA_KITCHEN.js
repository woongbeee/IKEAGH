// kitchens

const kitchen = [
    {
        id: 1,
        title: "히타르프",
        category: "히타르프",
        size: "4.3m, 34평형",
        price: "3,300,000원",
        detail: "조리대, 설치비 제외(타사 진행)",
        address: "광교 참누리 레이크",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EA%B9%80%EC%9D%80%ED%98%9C/%EA%B9%80%EC%9D%80%ED%98%9C.jpg",
    },
    {
        id: 2,
        title: "복스토르프 매트화이트",
        category: "복스토르프",
        size: "2.4*3m",
        price: "3,000,000원",
        detail: "이케아 설치서비스 비용 포함",
        address: "대전 샘머리 아파트",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EA%B9%80%EC%A7%80%EC%96%B8/%EA%B9%80%EC%A7%80%EC%96%B8%20(1).jpg",
    },

    {
        id: 3,
        title: "복스토르프 매트화이트",
        category: "복스토르프",
        size: "5.3 * 4.3m",
        price: "6,826,500원",
        detail: "이케아 설치서비스 비용 포함",
        address: "용인 흥덕마을 8단지",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EA%B9%80%EC%A7%80%ED%99%98/%EA%B9%80%EC%A7%80%ED%99%98%20(1).jpg",
    },

    {
        id: 4,
        title: "에케스타드",
        category: "에케스타드",
        size: "약 5평",
        price: "3,900,000원",
        detail: "상부장, 조리대, 설치비 제외(타사 진행)",
        address: "성남시 분당구 하이츠빌리지",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EB%B0%95%EB%8B%A4%EC%86%9C/%EB%B0%95%EB%8B%A4%EC%86%9C%20(1).jpg",
    },



    {
        id: 5,
        title: "보드뷘 오프화이트",
        category: "보드뷘",
        size: "약 5평, 33평",
        detail: "이케아 설치서비스 비용 포함",
        price: "6,753,100원",
        address: "동탄 레이크 자연앤푸르지오",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EB%B0%95%ED%95%B4%EC%99%84/%EB%B0%95%ED%95%B4%EC%99%84%200,%20%EB%A9%94%EC%9D%B8%EC%9D%B4%EB%AF%B8%EC%A7%80.PNG",
    },

    {
        id: 6,
        title: "에케스타드",
        category: "에케스타드",
        size: "6m",
        price: "6,138,260원",
        detail: "이케아 설치서비스 비용 포함",
        address: "용인 신동아파밀리에",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EB%B0%95%ED%98%95%EC%A3%BC/%EB%B0%95%ED%98%95%EC%A3%BC%20(2).jpg",
    },

    {
        id: 7,
        title: "보드뷘 오프화이트",
        category: "보드뷘",
        size: "5*2m",
        price: "6,200,000원",
        detail: "이케아 설치서비스 비용 포함",
        address: "동탄 시범한화 꿈에그린",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%95%88%ED%9D%AC%EC%98%81/%EC%95%88%ED%9D%AC%EC%98%81%200,%EB%A9%94%EC%9D%B8%EC%9D%B4%EB%AF%B8%EC%A7%80.PNG",
    },

    {
        id: 8,
        title: "보드뷘 오프화이트",
        category: "보드뷘",
        size: "4.7*2.9m",
        price: "4,089,000원",
        detail: "조리대,설치비 제외(타사 진행)",
        address: "안성시 전원주택",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%9D%B4%EC%8A%B9%EC%88%98/%EC%9D%B4%EC%8A%B9%EC%88%98%20(1).jpg",
    },

    {
        id: 9,
        title: "베딩에",
        category: "베딩에",
        size: "5*2m",
        price: "2,530,000원",
        detail: "조리대, 설치비 제외(자가 설치)",
        address: "수원 장안 힐스테이트",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%9E%A5%EC%84%9D%EB%A1%80/%EC%9E%A5%EC%84%9D%EB%A1%80%201,%20%EC%84%9C%EB%B8%8C%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
    },

    {
        id: 10,
        title: "에케스타드",
        category: "에케스타드",
        size: "4.83*3.55m",
        price: "4,288,500원",
        address: "천안 불당 한화꿈에그린",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%A0%84%EC%95%84%EB%A1%B1/%EC%A0%84%EC%95%84%EB%A1%B1%20(1).jpg",
    },
    
    {
        id: 11,
        title: "보드뷘 그레이",
        category: "보드뷘",
        size: "3*3m, 39평형",
        price: "6,625,000원",
        detail: "이케아 설치서비스 비용 포함",
        address: "동탄 서해그랑블",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%B5%9C%EC%88%98%EB%AF%B8/%EC%B5%9C%EC%88%98%EB%AF%B80,%20%EB%A9%94%EC%9D%B8%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
    },


    {
        id: 12,
        title: "그레브스타",
        category: "그레브스타",
        size: "2.8m",
        price: "4,000,000원",
        address: "용인 동문굿모닝3차",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EA%B9%80%EA%B8%B0%ED%99%8D.jpg",
    },

    {
        id: 13,
        title: "보드뷘 오프화이트",
        category: "보드뷘",
        size: "2.8*2.4m",
        price: "3,993,500원",
        detail: "이케아 설치서비스 비용 포함",
        address: "동탄 세인트캐슬",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%84%9C%EC%84%9C%EC%9D%B4.jpg",
    },

    {
        id: 14,
        title: "복스토르프 매트화이트",
        category: "복스토르프",
        size: "8*3m",
        price: "6,000,000원",
        detail: "설치비 제외 (직접 설치)",
        address: "춘천 단독주택",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%86%A1%ED%98%9C%EC%A7%840,%20%EB%A9%94%EC%9D%B8%EC%9D%B4%EB%AF%B8%EC%A7%80%20(%EC%82%AC%EC%A7%84%201%EC%9E%A5%EB%BF%90%EC%9E%84).jpg",
    },



    {
        id: 15,
        title: "복스토르프 매트화이트",
        category: "복스토르프",
        size: "2.7*1.8m",
        price: "4,500,000원",
        detail: "이케아 설치서비스 비용 포함",
        address: "수지 현대성우8단지",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%9D%B4%EC%97%B0%EC%8B%A42.jpg",
    },

    {
        id: 16,
        title: "쿵스바카 매트화이트",
        category: "쿵스바카",
        size: "32평형 주방",
        price: "3,700,000원",
        detail: "조리대, 설치비 제외(타사 설치)",
        address: "노량진 신동아리버파크",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%8B%AC%EC%83%81%EC%9D%BC/%EC%8B%AC%EC%83%81%EC%9D%BC3.jpg",
    },

    {
        id: 17,
        title: "복스토르프 다크그레이",
        category: "복스토르프",
        size: "1.6*1.2m",
        price: "3,000,000원",
        detail: "단독 아일랜드/이케아 설치 서비스 비용 포함, 본주방X",
        address: "용인 현대필그린",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%9D%B4%ED%9A%A8%EC%A0%952.jpg",
    },

    {
        id: 18,
        title: "아스케르순드",
        category: "아스케르순드",
        size: "3*2.7m",
        price: "3,000,000원",
        address: "동탄 레이크 자연앤푸르지오",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%9E%A5%EC%84%A0%EC%98%81.jpg",
    },

    {
        id: 19,
        title: "베딩에",
        category: "베딩에",
        size: "3*2.5m",
        price: "5,000,000원",
        detail: "이케아 설치서비스 비용 포함, 조리대 비용 제외",
        address: "e편한세상",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%9E%A5%EC%9E%AC%ED%98%84.jpg",
    },

    {
        id: 20,
        title: "베딩에",
        category: "베딩에",
        size: "33평형",
        price: "4,000,000원",
        detail: "이케아 설치서비스 비용 포함",
        address: "전북 군산 금광베네스타",
        img: "https://iweof.sharepoint.com/teams/o365g_dl582hfb0708_retkr582/Shared%20Documents/Kitchen%20Contest/%EC%A1%B0%EC%8A%B9%EC%9E%902.jpg",
    }
]

// load items


const sectionCenter = document.querySelector(".sectionCenter");





window.addEventListener("DOMContentLoaded", function () {
    ShowKitchens(kitchen);
});


function ShowKitchens(kitchenList) {
    let Showikea = kitchenList.map(function (kitchen) {

        return `<article class="kitchen">
          <img src=${kitchen.img} class="photo" alt="이미지 로드 실패" />
          <div class="kitchen-info">
            <header>
              <object.style.whiteSpace="pre">
              <h3 class ="door">${kitchen.title}</h3>
              </header>
              <h4 class="address">${kitchen.address}</h4>
              <h4 class="size">${kitchen.size}</h4>
              <h4 class="price">${kitchen.price}</h4>
              <h4 class="detail">${kitchen.detail}</h4 >
            
            </div>
          </article>`;
    });




        Showikea = Showikea.join("");
        sectionCenter.innerHTML = Showikea;

};

const openPopup = document.getElementsByClassName("photo");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector("button")


const openModal = () => {
        modal.classList.remove("hidden")
    }

const closeModal = () => {
    modal.classList.add("hidden");

};
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openPopup.addEventListener("click", openModal);