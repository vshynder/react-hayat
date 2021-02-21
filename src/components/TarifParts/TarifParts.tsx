import React from 'react';
import { COLORS } from '../../constants';

export interface TarifPartsProps {}

const TarifParts: React.FC<TarifPartsProps> = () => {
  return (
    <div className="tarif container">
      <h2 className="tarif__title">Складові тарифу розподілу:</h2>
      <div className="tarif__content">
        <h3 className="tarif__content--name">Тариф постачання активної е/е</h3>
        <div className="tarif__formula">
          <div className="tarif__formula--block">
            <div className="tarif__formula--block-inner">
              <svg
                className="tarif__formula--block--lamp"
                width="111"
                height="325"
                viewBox="0 0 111 325"
                fill={COLORS.dark}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.7646 288.4C59.7708 292.392 60.928 296.302 63.0994 299.628L73.7321 315.935C75.5484 318.723 78.0121 321.009 80.9037 322.59C83.7954 324.172 87.0255 324.999 90.3064 324.999H109.5C112.781 324.999 109.5 324.999 109.5 322.59C109.5 320.5 109.5 318.5 109.5 315.935V299.628C109.5 278 109.158 299.628 109.5 288.4V264.057H59.7335L59.7646 288.4ZM0 111.716C0 139.88 10.2345 165.575 27.1012 185.208C37.3793 197.173 53.4559 222.17 59.5842 243.256C59.6091 243.421 59.6277 243.586 59.6526 243.751H109.5C59.5842 244.246 59.6526 243.751 109.5 243.751C109.158 221 109.158 199.5 109.158 185.208C109.158 163.5 109.158 139.88 109.158 111.717C109.158 49.898 109.158 0 109.158 0C45.6914 0.196773 0 52.6654 0 111.716ZM91 58.4995C63.0994 68.9995 59.7273 83.7175 59.7273 111.716C59.7273 117.328 55.2726 121.872 49.7727 121.872C44.2728 121.872 39.8182 117.328 39.8182 111.716C39.8182 72.5141 44.5 52.9995 91 38.9995C96.4999 38.9995 100.5 42.8882 100.5 48.4995C100.5 54.1107 96.4999 58.4995 91 58.4995Z"
                  fill-opacity="0.7"
                />
              </svg>
              <div className="tarif__formula--block--card">
                Собівартість е/е відповідно до графіку та обсягу споживань
              </div>
              <div className="tarif__formula--block--card">
                Тариф постачання
              </div>
              <div className="tarif__formula--block--card">Тариф передачі</div>
              <p className="tarif__formula--block--card--subtext">
                Плата за спеціальні обов’язки ПрАТ “НЕК Укренерго”
              </p>
              <p className="tarif__formula--block--card--subtext">
                Розмір визначається постановою НКРЕКП
              </p>
            </div>
          </div>
          <div className="tarif__formula--block">
            <svg
              width="62"
              height="59"
              viewBox="0 0 62 59"
              fill={COLORS.dark}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M57.5714 23.1786H37.6429V4.21429C37.6429 1.88721 35.6597 0 33.2143 0H28.7857C26.3403 0 24.3571 1.88721 24.3571 4.21429V23.1786H4.42857C1.98317 23.1786 0 25.0658 0 27.3929V31.6071C0 33.9342 1.98317 35.8214 4.42857 35.8214H24.3571V54.7857C24.3571 57.1128 26.3403 59 28.7857 59H33.2143C35.6597 59 37.6429 57.1128 37.6429 54.7857V35.8214H57.5714C60.0168 35.8214 62 33.9342 62 31.6071V27.3929C62 25.0658 60.0168 23.1786 57.5714 23.1786Z" />
            </svg>
          </div>
          <div className="tarif__formula--block">
            <svg
              width="92"
              height="92"
              viewBox="0 0 92 92"
              fill={COLORS.dark}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.99 62.6866C3.04031 63.3191 3.49887 63.8437 4.11987 63.9774L9.12956 65.0584C9.30637 65.9123 9.53062 66.7547 9.80231 67.5769L6.01019 71.0126C5.54013 71.4381 5.405 72.1223 5.67813 72.6959C6.371 74.1535 7.14294 75.5004 7.97237 76.6993C8.33175 77.2197 8.99013 77.4439 9.59531 77.2499L14.4641 75.6816C15.0463 76.3342 15.6659 76.9537 16.3185 77.5359L14.7502 82.4047C14.5561 83.0071 14.7789 83.6669 15.3007 84.0277C16.4996 84.8571 17.8466 85.6291 19.3042 86.3219C19.8792 86.5951 20.562 86.4585 20.9875 85.9899L24.4231 82.1977C25.2468 82.468 26.0892 82.6937 26.9431 82.8705L28.0241 87.8802C28.1578 88.4997 28.6824 88.9583 29.3135 89.0101C30.0783 89.0704 30.8444 89.1251 31.625 89.1251C32.4056 89.1251 33.1717 89.0704 33.9365 89.0101C34.569 88.9597 35.0937 88.5012 35.2274 87.8802L36.3084 82.8705C37.1623 82.6937 38.0061 82.4694 38.8283 82.1977L42.2639 85.9899C42.6909 86.4599 43.3751 86.5965 43.9473 86.3219C45.4049 85.6291 46.7518 84.8557 47.9507 84.0277C48.4725 83.6669 48.6953 83.0071 48.5013 82.4047L46.9329 77.5359C47.5856 76.9537 48.2051 76.3342 48.7873 75.683L53.6561 77.2513C54.2584 77.4468 54.9183 77.2226 55.2791 76.7007C56.1085 75.5019 56.8804 74.1549 57.5733 72.6973C57.8464 72.1237 57.7113 71.4395 57.2412 71.014L53.4491 67.5784C53.7194 66.7547 53.9451 65.9123 54.1219 65.0584L59.1316 63.9774C59.7511 63.8437 60.2097 63.3191 60.2614 62.688C60.3204 61.9218 60.375 61.1556 60.375 60.3751C60.375 59.5945 60.3204 58.8283 60.26 58.0636C60.2097 57.4311 59.7511 56.9064 59.1301 56.7727L54.1204 55.6917C53.9436 54.8378 53.7194 53.994 53.4477 53.1717L57.2398 49.7361C57.7099 49.3106 57.845 48.6264 57.5719 48.0528C56.879 46.5952 56.1056 45.2482 55.2776 44.0494C54.9168 43.5276 54.257 43.3033 53.6547 43.4988L48.7859 45.0671C48.2037 44.4145 47.5841 43.7949 46.9315 43.2127L48.4998 38.3439C48.6939 37.7416 48.4711 37.0818 47.9492 36.721C46.7504 35.8916 45.4034 35.1196 43.9458 34.4267C43.3708 34.1522 42.688 34.2887 42.2625 34.7588L38.8269 38.5509C38.0032 38.2807 37.1608 38.055 36.3069 37.8782L35.2259 32.8685C35.0922 32.2489 34.5676 31.7904 33.9365 31.7386C32.4056 31.615 30.843 31.6179 29.3121 31.7386C28.6796 31.7889 28.1549 32.2475 28.0212 32.8685L26.9402 37.8782C26.0863 38.055 25.2439 38.2792 24.4217 38.5509L20.9861 34.7588C20.5606 34.2887 19.8778 34.1536 19.3028 34.4267C17.8451 35.1196 16.4982 35.8916 15.2993 36.721C14.7775 37.0818 14.5547 37.7416 14.7488 38.3439L16.3171 43.2127C15.6644 43.7949 15.0449 44.4145 14.4627 45.0671L9.59531 43.4988C8.99156 43.3033 8.33175 43.5276 7.97237 44.0494C7.14294 45.2482 6.371 46.5952 5.67813 48.0528C5.405 48.6264 5.54013 49.3106 6.01019 49.7361L9.80231 53.1717C9.53206 53.9954 9.30637 54.8378 9.12956 55.6917L4.11987 56.7727C3.50031 56.9064 3.04175 57.4311 2.99 58.0621C2.92962 58.8283 2.875 59.5945 2.875 60.3751C2.875 61.1556 2.92962 61.9218 2.99 62.6866ZM5.78019 59.3559L10.6706 58.2993C11.2484 58.1742 11.6912 57.7085 11.7861 57.1249C12.0017 55.7995 12.3496 54.4986 12.8196 53.2566C13.0295 52.7046 12.8786 52.0792 12.4401 51.6825L8.74719 48.336C9.06919 47.7193 9.40556 47.1285 9.75344 46.5693L14.4914 48.0959C15.0521 48.2756 15.6702 48.0959 16.0454 47.6388C16.8935 46.6009 17.8509 45.645 18.8888 44.7954C19.3459 44.4217 19.5284 43.805 19.3459 43.2415L17.8193 38.5035C18.3784 38.1542 18.9678 37.8178 19.5859 37.4972L22.9324 41.1916C23.3306 41.6301 23.9574 41.781 24.5079 41.5711C25.7471 41.1011 27.048 40.7532 28.3748 40.5376C28.9584 40.4427 29.4242 39.9999 29.5492 39.4221L30.6044 34.5317C31.2814 34.4957 31.97 34.4943 32.6442 34.5317L33.7008 39.4221C33.8258 39.9999 34.2916 40.4427 34.8752 40.5376C36.2006 40.7532 37.5015 41.1011 38.7435 41.5711C39.2926 41.781 39.9194 41.6315 40.3176 41.1916L43.6641 37.4987C44.2808 37.8207 44.8716 38.1571 45.4308 38.5049L43.9041 43.2429C43.723 43.8064 43.9041 44.4217 44.3613 44.7969C45.3991 45.645 46.3551 46.6024 47.2046 47.6402C47.5798 48.0988 48.1965 48.2814 48.7586 48.0974L53.4966 46.5707C53.8459 47.1299 54.1823 47.7193 54.5028 48.336L50.8084 51.6825C50.37 52.0792 50.2191 52.7046 50.4289 53.258C50.899 54.4971 51.2469 55.7981 51.4625 57.1249C51.5574 57.7085 52.0001 58.1742 52.578 58.2993L57.4684 59.3544C57.4871 59.6922 57.5 60.0329 57.5 60.3751C57.5 60.7172 57.4885 61.0579 57.4698 61.3942L52.5794 62.4508C52.0016 62.5759 51.5588 63.0416 51.4639 63.6252C51.2483 64.9506 50.9004 66.2516 50.4304 67.4936C50.2205 68.0456 50.3714 68.6709 50.8099 69.0676L54.5028 72.4141C54.1808 73.0308 53.8444 73.6216 53.4966 74.1808L48.7586 72.6542C48.1936 72.4702 47.5798 72.6527 47.2046 73.1113C46.3579 74.1463 45.4006 75.1037 44.3613 75.9547C43.9041 76.3284 43.723 76.9451 43.9041 77.5072L45.4308 82.2452C44.8716 82.5945 44.2822 82.9309 43.6655 83.2514L40.319 79.5571C39.9222 79.1186 39.2969 78.9706 38.7435 79.1776C37.5044 79.6476 36.2034 79.9955 34.8766 80.2111C34.293 80.306 33.8272 80.7487 33.7022 81.3266L32.6471 86.217C31.97 86.2529 31.2814 86.2544 30.6073 86.217L29.5507 81.3266C29.4256 80.7487 28.9599 80.306 28.3762 80.2111C27.0509 79.9955 25.7499 79.6476 24.5079 79.1776C23.9574 78.9677 23.3306 79.1172 22.9339 79.5571L19.5874 83.25C18.9707 82.928 18.3799 82.5916 17.8207 82.2437L19.3473 77.5057C19.5284 76.9422 19.3473 76.327 18.8902 75.9518C17.8523 75.1037 16.8964 74.1463 16.0468 73.1084C15.6716 72.6499 15.0535 72.4687 14.4929 72.6513L9.75487 74.1779C9.40556 73.6187 9.06919 73.0294 8.74862 72.4112L12.443 69.0647C12.8814 68.668 13.0324 68.0427 12.8225 67.4892C12.3524 66.2501 12.0046 64.9492 11.7889 63.6224C11.6941 63.0387 11.2513 62.573 10.6734 62.4479L5.78019 61.3957C5.76294 61.0579 5.75 60.7172 5.75 60.3751C5.75 60.0329 5.7615 59.6922 5.78019 59.3559Z" />
              <path d="M77.9398 23.3378C78.4803 23.1682 78.8713 22.6953 78.936 22.1318C79.0222 21.4058 79.0625 20.7489 79.0625 20.125C79.0625 19.5011 79.0222 18.8442 78.9374 18.1183C78.8727 17.5548 78.4818 17.0818 77.9413 16.9122L73.9551 15.6601C73.8357 15.3338 73.7035 15.0133 73.5583 14.6999L75.4903 10.9983C75.7519 10.4966 75.6944 9.88714 75.3437 9.44151C74.5114 8.38926 73.554 7.43189 72.4989 6.5967C72.0532 6.24451 71.4438 6.18845 70.9421 6.44864L67.2376 8.38064C66.9242 8.23689 66.6037 8.10464 66.2774 7.98533L65.0253 3.99914C64.8557 3.45864 64.3827 3.06764 63.8193 3.00295C62.3645 2.83333 61.2591 2.83333 59.8043 3.00295C59.2408 3.06764 58.7679 3.45864 58.5982 3.99914L57.3462 7.98533C57.0199 8.10464 56.6993 8.23689 56.3859 8.38208L52.6844 6.45008C52.1827 6.18989 51.5746 6.24595 51.1276 6.5967C50.0753 7.42901 49.1179 8.38639 48.2828 9.44151C47.9306 9.88714 47.8731 10.4952 48.1347 10.9983L50.0652 14.6999C49.9215 15.0133 49.7893 15.3338 49.6699 15.6601L45.6838 16.9122C45.1433 17.0818 44.7522 17.5548 44.6876 18.1183C44.6027 18.8442 44.5625 19.5011 44.5625 20.125C44.5625 20.7489 44.6027 21.4058 44.6876 22.1318C44.7522 22.6953 45.1433 23.1682 45.6838 23.3378L49.6699 24.5899C49.7893 24.9162 49.9215 25.2368 50.0667 25.5501L48.1347 29.2517C47.8731 29.7534 47.9306 30.3629 48.2813 30.8085C49.1136 31.8608 50.071 32.8181 51.1261 33.6533C51.5703 34.0055 52.1812 34.0616 52.6829 33.8014L56.3845 31.8708C56.6979 32.0146 57.0184 32.1468 57.3447 32.2661L58.5968 36.2523C58.7664 36.7928 59.2394 37.1838 59.8029 37.2485C60.5317 37.3348 61.1886 37.375 61.8125 37.375C62.4364 37.375 63.0933 37.3348 63.8193 37.25C64.3827 37.1853 64.8557 36.7943 65.0253 36.2538L66.2774 32.2676C66.6037 32.1483 66.9242 32.016 67.2376 31.8708L70.9392 33.8028C71.4409 34.0645 72.0504 34.0084 72.496 33.6562C73.5482 32.8239 74.5056 31.8665 75.3408 30.8114C75.693 30.3658 75.7505 29.7577 75.4889 29.2546L73.5569 25.553C73.7021 25.2396 73.8343 24.9191 73.9536 24.5928L77.9398 23.3378ZM72.3911 22.0671C71.9368 22.2108 71.5832 22.5688 71.4452 23.0259C71.2497 23.6756 70.9909 24.301 70.6776 24.886C70.4519 25.3058 70.4476 25.8103 70.6689 26.2315L72.4931 29.7275C72.1524 30.1056 71.7916 30.4664 71.415 30.8056L67.919 28.9815C67.4964 28.7601 66.9918 28.7658 66.5735 28.9901C65.9884 29.3035 65.3631 29.5622 64.7134 29.7577C64.2577 29.8943 63.8983 30.2493 63.7546 30.7036L62.5701 34.4756C62.0454 34.5072 61.5811 34.5072 61.0549 34.4756L59.8704 30.7036C59.7267 30.2493 59.3687 29.8957 58.9116 29.7577C58.2604 29.5622 57.6351 29.3035 57.0529 28.9901C56.6332 28.7644 56.1286 28.7601 55.706 28.9815L52.21 30.8056C51.8319 30.465 51.4711 30.1041 51.1319 29.7275L52.9561 26.2315C53.176 25.8103 53.1731 25.3043 52.9474 24.886C52.6341 24.301 52.3753 23.6756 52.1798 23.0259C52.0432 22.5702 51.6882 22.2108 51.2339 22.0671L47.4619 20.8826C47.4447 20.6195 47.4375 20.368 47.4375 20.125C47.4375 19.8821 47.4447 19.6305 47.4619 19.3675L51.2339 18.183C51.6882 18.0392 52.0418 17.6813 52.1798 17.2241C52.3753 16.573 52.6341 15.9476 52.9474 15.3655C53.1731 14.9457 53.1774 14.4411 52.9561 14.0185L51.1319 10.5225C51.4726 10.1445 51.8334 9.78364 52.21 9.44439L55.706 11.2686C56.1272 11.4885 56.6332 11.4842 57.0515 11.26C57.6366 10.9466 58.2619 10.6878 58.9116 10.4923C59.3673 10.3558 59.7267 10.0007 59.8704 9.54645L61.0549 5.77445C61.5796 5.74283 62.0439 5.74283 62.5701 5.77445L63.7546 9.54645C63.8983 10.0007 64.2563 10.3543 64.7134 10.4923C65.3646 10.6878 65.9899 10.9466 66.5721 11.26C66.9918 11.4856 67.4964 11.49 67.919 11.2686L71.415 9.44439C71.7931 9.78508 72.1539 10.1459 72.4931 10.5225L70.6689 14.0185C70.449 14.4397 70.4519 14.9457 70.6776 15.364C70.9909 15.9491 71.2497 16.5744 71.4452 17.2241C71.5818 17.6798 71.9368 18.0392 72.3911 18.183L76.1631 19.3675C76.1803 19.6305 76.1875 19.8821 76.1875 20.125C76.1875 20.368 76.1803 20.6195 76.1631 20.8826L72.3911 22.0671Z" />
              <path d="M88.0641 50.2608L85.5945 49.3839C85.4536 48.9828 85.2926 48.5904 85.1101 48.2095L86.2327 45.8448C86.4671 45.3531 86.4024 44.7724 86.066 44.344C85.3473 43.4255 84.5164 42.5931 83.5949 41.8715C83.1651 41.5351 82.5815 41.4719 82.0928 41.7048L79.7266 42.8275C79.3471 42.6463 78.9547 42.4839 78.5536 42.3445L77.6753 39.8748C77.4928 39.3616 77.0342 38.9951 76.4937 38.929C75.2129 38.7751 74.2857 38.7751 73.0049 38.929C72.4644 38.9936 72.0058 39.3602 71.8233 39.8748L70.9464 42.3445C70.5453 42.4853 70.1529 42.6463 69.7719 42.8289L67.4072 41.7062C66.9185 41.4733 66.3363 41.538 65.9065 41.873C64.9879 42.5917 64.1556 43.4226 63.434 44.344C63.0991 44.7724 63.0344 45.3546 63.2673 45.8462L64.3899 48.2123C64.2088 48.5918 64.0464 48.9843 63.9069 49.3853L61.4373 50.2636C60.9241 50.4462 60.5576 50.9048 60.4914 51.4453C60.4124 52.0821 60.375 52.6528 60.375 53.1875C60.375 53.7223 60.4124 54.2915 60.49 54.9312C60.5547 55.4717 60.9212 55.9303 61.4359 56.1128L63.9055 56.9897C64.0464 57.3908 64.2074 57.7832 64.3899 58.1641L63.2673 60.5288C63.0329 61.0204 63.0976 61.6012 63.434 62.0296C64.1527 62.9481 64.9836 63.7804 65.9051 64.5021C66.3334 64.837 66.9171 64.9017 67.4072 64.6688L69.7734 63.5461C70.1529 63.7273 70.5453 63.8897 70.9464 64.0291L71.8247 66.4988C72.0072 67.0119 72.4658 67.3785 73.0063 67.4446C73.646 67.5251 74.2153 67.5625 74.75 67.5625C75.2847 67.5625 75.854 67.5251 76.4937 67.4475C77.0342 67.3828 77.4928 67.0163 77.6753 66.5016L78.5522 64.032C78.9533 63.8911 79.3457 63.7301 79.7266 63.5476L82.0913 64.6703C82.5815 64.9046 83.1651 64.8413 83.5921 64.5035C84.5106 63.7848 85.3429 62.9539 86.0646 62.0324C86.3995 61.6041 86.4642 61.0219 86.2313 60.5303L85.1086 58.1641C85.2898 57.7846 85.4522 57.3922 85.5916 56.9911L88.0612 56.1128C88.5744 55.9303 88.941 55.4717 89.0071 54.9312C89.0876 54.2915 89.125 53.7223 89.125 53.1875C89.125 52.6528 89.0876 52.0835 89.01 51.4438C88.9453 50.9019 88.5788 50.4448 88.0641 50.2608ZM86.2356 53.7122L83.9572 54.5215C83.5159 54.6782 83.1781 55.0405 83.053 55.4918C82.8647 56.1746 82.5959 56.8258 82.2552 57.4281C82.0252 57.8349 82.0079 58.3294 82.2078 58.7521L83.2399 60.927C83.0012 61.1886 82.7511 61.4388 82.4909 61.6759L80.316 60.6438C79.8963 60.444 79.4003 60.4613 78.9921 60.6913C78.3883 61.0334 77.7371 61.3008 77.0572 61.4891C76.6058 61.6141 76.2436 61.9519 76.0854 62.3933L75.2761 64.6717C74.9283 64.6904 74.5746 64.6904 74.2268 64.6717L73.4174 62.3933C73.2608 61.9519 72.8985 61.6141 72.4471 61.4891C71.7643 61.3008 71.1131 61.0319 70.5108 60.6913C70.104 60.4627 69.6109 60.4454 69.1869 60.6438L67.0119 61.6759C66.7503 61.4373 66.5002 61.1872 66.263 60.927L67.2951 58.7521C67.4964 58.3294 67.4777 57.8349 67.2477 57.4281C66.9056 56.8244 66.6382 56.1732 66.4499 55.4933C66.3248 55.0419 65.987 54.6796 65.5457 54.5215L63.2673 53.7122C63.2558 53.5383 63.25 53.3643 63.25 53.1875C63.25 53.0107 63.2557 52.8353 63.2644 52.6628L65.5428 51.8521C65.9841 51.6954 66.3219 51.3331 66.4456 50.8818C66.6353 50.1975 66.9041 49.5478 67.2448 48.9455C67.4748 48.5386 67.4921 48.0441 67.2923 47.6215L66.2601 45.4466C66.4988 45.185 66.7489 44.9348 67.0091 44.6976L69.184 45.7298C69.6066 45.931 70.1011 45.9138 70.5079 45.6823C71.1117 45.3402 71.7629 45.0728 72.4428 44.8845C72.8942 44.7595 73.2564 44.4216 73.4146 43.9803L74.2239 41.7019C74.5717 41.6832 74.9254 41.6832 75.2732 41.7019L76.0826 43.9803C76.2392 44.4216 76.6015 44.7595 77.0529 44.8845C77.7357 45.0728 78.3869 45.3416 78.9892 45.6823C79.3974 45.9138 79.8905 45.931 80.3131 45.7298L82.4881 44.6976C82.7497 44.9363 82.9998 45.1864 83.237 45.4466L82.2049 47.6215C82.0036 48.0441 82.0223 48.5386 82.2523 48.9455C82.5944 49.5492 82.8618 50.2004 83.0501 50.8803C83.1752 51.3317 83.513 51.694 83.9543 51.8521L86.2327 52.6614C86.2442 52.8368 86.25 53.0107 86.25 53.1875C86.25 53.3643 86.2443 53.5383 86.2356 53.7122Z" />
              <path d="M31.625 76.1875C40.3434 76.1875 47.4375 69.0934 47.4375 60.375C47.4375 51.6566 40.3434 44.5625 31.625 44.5625C22.9066 44.5625 15.8125 51.6566 15.8125 60.375C15.8125 69.0934 22.9066 76.1875 31.625 76.1875ZM31.625 47.4375C38.7579 47.4375 44.5625 53.2421 44.5625 60.375C44.5625 67.5079 38.7579 73.3125 31.625 73.3125C24.4921 73.3125 18.6875 67.5079 18.6875 60.375C18.6875 53.2421 24.4921 47.4375 31.625 47.4375Z" />
              <path d="M2.90674 36.4535L5.11474 38.295C11.6971 30.4016 21.3585 25.875 31.6251 25.875C32.3568 25.875 33.0871 25.9166 33.8173 25.9626L32.0463 27.7336L34.0789 29.7663L38.3914 25.4538C38.9535 24.8917 38.9535 23.9832 38.3914 23.4211L34.0789 19.1086L32.0463 21.1413L33.9999 23.0948C33.2092 23.0445 32.4172 23 31.6251 23C20.5046 23 10.0367 27.9033 2.90674 36.4535Z" />
              <path d="M61.8125 12.9375C57.8493 12.9375 54.625 16.1618 54.625 20.125C54.625 24.0882 57.8493 27.3125 61.8125 27.3125C65.7757 27.3125 69 24.0882 69 20.125C69 16.1618 65.7757 12.9375 61.8125 12.9375ZM61.8125 24.4375C59.4349 24.4375 57.5 22.5026 57.5 20.125C57.5 17.7474 59.4349 15.8125 61.8125 15.8125C64.1901 15.8125 66.125 17.7474 66.125 20.125C66.125 22.5026 64.1901 24.4375 61.8125 24.4375Z" />
              <path d="M74.75 47.4375C71.5789 47.4375 69 50.0164 69 53.1875C69 56.3586 71.5789 58.9375 74.75 58.9375C77.9211 58.9375 80.5 56.3586 80.5 53.1875C80.5 50.0164 77.9211 47.4375 74.75 47.4375ZM74.75 56.0625C73.1644 56.0625 71.875 54.7731 71.875 53.1875C71.875 51.6019 73.1644 50.3125 74.75 50.3125C76.3356 50.3125 77.625 51.6019 77.625 53.1875C77.625 54.7731 76.3356 56.0625 74.75 56.0625Z" />
              <path d="M87.9693 7.21625L80.7818 5.77875C79.9998 5.62063 79.2451 6.12807 79.0898 6.90575L77.6523 14.0933L80.4713 14.6582L81.2461 10.7884C82.639 13.6864 83.375 16.8806 83.375 20.125C83.375 25.0815 81.7392 29.7419 78.6457 33.6016L80.8896 35.3999C84.3468 31.0859 86.25 25.6623 86.25 20.125C86.25 16.3602 85.3803 12.6486 83.7258 9.29919L87.4058 10.0352L87.9693 7.21625Z" />
            </svg>
            <div className="tarif__formula--block--card--gear">
              <h5 className="tarif__formula--block--card--title">
                Тариф розподілу
              </h5>
              <p className="tarif__formula--block--card--text">
                встановлюється індивідуально НКРЕКП для кожного оператора
                системи розподілу
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarifParts;
