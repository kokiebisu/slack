import * as React from 'react';
import styled from 'styled-components';

/**
 * Shared
 */

export const HamburgerButton = () => {
  return (
    <svg viewBox='0 0 24 17'>
      <path d='M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z' />
    </svg>
  );
};

export const Clock = () => {
  return (
    <svg viewBox='0 0 384 384'>
      <g>
        <path
          d='m343.59375 101.039062c-7.953125 3.847657-11.28125 13.417969-7.433594 21.367188 10.511719 21.714844 15.839844 45.121094 15.839844 69.59375 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c36.558594 0 70.902344 11.9375 99.328125 34.519531 6.894531 5.503907 16.976563 4.351563 22.480469-2.566406 5.503906-6.914063 4.351562-16.984375-2.570313-22.480469-33.652343-26.746094-76-41.472656-119.238281-41.472656-105.863281 0-192 86.136719-192 192s86.136719 192 192 192 192-86.136719 192-192c0-29.335938-6.40625-57.449219-19.039062-83.527344-3.839844-7.96875-13.441407-11.289062-21.367188-7.433594zm0 0'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m192 64c-8.832031 0-16 7.167969-16 16v112c0 8.832031 7.167969 16 16 16h80c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-64v-96c0-8.832031-7.167969-16-16-16zm0 0'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
      </g>
    </svg>
  );
};

export const Globe = () => {
  return (
    <svg viewBox='0 0 496 512'>
      <path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm179.3 160h-67.2c-6.7-36.5-17.5-68.8-31.2-94.7 42.9 19 77.7 52.7 98.4 94.7zM248 56c18.6 0 48.6 41.2 63.2 112H184.8C199.4 97.2 229.4 56 248 56zM48 256c0-13.7 1.4-27.1 4-40h77.7c-1 13.1-1.7 26.3-1.7 40s.7 26.9 1.7 40H52c-2.6-12.9-4-26.3-4-40zm20.7 88h67.2c6.7 36.5 17.5 68.8 31.2 94.7-42.9-19-77.7-52.7-98.4-94.7zm67.2-176H68.7c20.7-42 55.5-75.7 98.4-94.7-13.7 25.9-24.5 58.2-31.2 94.7zM248 456c-18.6 0-48.6-41.2-63.2-112h126.5c-14.7 70.8-44.7 112-63.3 112zm70.1-160H177.9c-1.1-12.8-1.9-26-1.9-40s.8-27.2 1.9-40h140.3c1.1 12.8 1.9 26 1.9 40s-.9 27.2-2 40zm10.8 142.7c13.7-25.9 24.4-58.2 31.2-94.7h67.2c-20.7 42-55.5 75.7-98.4 94.7zM366.3 296c1-13.1 1.7-26.3 1.7-40s-.7-26.9-1.7-40H444c2.6 12.9 4 26.3 4 40s-1.4 27.1-4 40h-77.7z' />
    </svg>
  );
};

/**
 * Landing Breakout Section
 * @param
 */
export const Organized = () => {
  return (
    <svg viewBox='0 0 32 32'>
      <path d='M21.2801 8.4721V4.0001C21.2801 3.09836 20.9219 2.23356 20.2843 1.59593C19.6466 0.958311 18.7818 0.600098 17.8801 0.600098H4.0001C3.09901 0.60221 2.23543 0.961102 1.59827 1.59827C0.961102 2.23543 0.60221 3.09901 0.600098 4.0001V17.8801C0.600098 18.7818 0.958311 19.6466 1.59593 20.2843C2.23356 20.9219 3.09836 21.2801 4.0001 21.2801H8.4721C8.73073 23.4222 9.58659 25.4484 10.9419 27.1273C12.2973 28.8062 14.0974 30.0701 16.1368 30.7746C18.1763 31.4791 20.3727 31.5959 22.4753 31.1116C24.578 30.6273 26.502 29.5614 28.0277 28.0357C29.5534 26.51 30.6193 24.586 31.1036 22.4833C31.5879 20.3807 31.4711 18.1843 30.7666 16.1448C30.0621 14.1054 28.7982 12.3053 27.1193 10.9499C25.4404 9.59459 23.4142 8.73873 21.2721 8.4801L21.2801 8.4721ZM2.6001 17.8801V4.0001C2.6022 3.62944 2.75037 3.27457 3.01247 3.01247C3.27457 2.75037 3.62944 2.6022 4.0001 2.6001H17.8801C18.2514 2.6001 18.6075 2.7476 18.87 3.01015C19.1326 3.2727 19.2801 3.62879 19.2801 4.0001V8.4161C16.4487 8.56969 13.7737 9.76359 11.7687 11.7687C9.76359 13.7737 8.56969 16.4487 8.4161 19.2801H4.0001C3.62879 19.2801 3.2727 19.1326 3.01015 18.87C2.7476 18.6075 2.6001 18.2514 2.6001 17.8801V17.8801ZM19.2801 10.4001V17.8641C19.2801 18.2354 19.1326 18.5915 18.87 18.854C18.6075 19.1166 18.2514 19.2641 17.8801 19.2641H10.4001C10.5509 16.9601 11.5354 14.7897 13.1695 13.1585C14.8037 11.5273 16.9758 10.5468 19.2801 10.4001V10.4001ZM19.8961 29.3841C17.619 29.3807 15.4186 28.5613 13.694 27.0744C11.9694 25.5876 10.8348 23.5318 10.4961 21.2801H17.8801C18.7818 21.2801 19.6466 20.9219 20.2843 20.2843C20.9219 19.6466 21.2801 18.7818 21.2801 17.8801V10.4961C23.6512 10.8498 25.8011 12.0865 27.2989 13.9584C28.7967 15.8303 29.5317 18.1991 29.3567 20.5901C29.1816 22.981 28.1095 25.2175 26.355 26.8513C24.6006 28.4851 22.2935 29.3955 19.8961 29.4001V29.3841Z' />
    </svg>
  );
};

export const Looped = () => {
  return (
    <svg viewBox='0 0 32 32'>
      <path d='M27.9999 0.599854H3.99985C3.09877 0.601966 2.23519 0.960858 1.59802 1.59802C0.960858 2.23519 0.601966 3.09877 0.599854 3.99985V23.1999C0.609135 23.9187 0.846598 24.6161 1.27797 25.1913C1.70934 25.7664 2.31231 26.1897 2.99985 26.3999V27.9999C3.00197 28.9009 3.36086 29.7645 3.99802 30.4017C4.63519 31.0388 5.49877 31.3977 6.39985 31.3999H25.5999C26.5009 31.3977 27.3645 31.0388 28.0017 30.4017C28.6388 29.7645 28.9977 28.9009 28.9999 27.9999V26.3999C29.6874 26.1897 30.2904 25.7664 30.7217 25.1913C31.1531 24.6161 31.3906 23.9187 31.3999 23.1999V3.99985C31.3977 3.09877 31.0388 2.23519 30.4017 1.59802C29.7645 0.960858 28.9009 0.601966 27.9999 0.599854V0.599854ZM26.9999 27.9999C26.9978 28.3705 26.8496 28.7254 26.5875 28.9875C26.3254 29.2496 25.9705 29.3978 25.5999 29.3999H6.39985C6.0292 29.3978 5.67432 29.2496 5.41222 28.9875C5.15013 28.7254 5.00195 28.3705 4.99985 27.9999V26.5999H26.9999V27.9999ZM29.3999 23.1999C29.3978 23.5705 29.2496 23.9254 28.9875 24.1875C28.7254 24.4496 28.3705 24.5978 27.9999 24.5999H3.99985C3.6292 24.5978 3.27432 24.4496 3.01222 24.1875C2.75013 23.9254 2.60195 23.5705 2.59985 23.1999V3.99985C2.60195 3.6292 2.75013 3.27432 3.01222 3.01222C3.27432 2.75013 3.6292 2.60195 3.99985 2.59985H27.9999C28.3705 2.60195 28.7254 2.75013 28.9875 3.01222C29.2496 3.27432 29.3978 3.6292 29.3999 3.99985V23.1999Z' />
      <path d='M9.94386 6.19189H6.06386C5.67505 6.19189 5.35986 6.50709 5.35986 6.89589V10.7759C5.35986 11.1647 5.67505 11.4799 6.06386 11.4799H9.94386C10.3327 11.4799 10.6479 11.1647 10.6479 10.7759V6.89589C10.6479 6.50709 10.3327 6.19189 9.94386 6.19189Z' />
      <path d='M9.94386 15.7119H6.06386C5.67505 15.7119 5.35986 16.0271 5.35986 16.4159V20.2959C5.35986 20.6847 5.67505 20.9999 6.06386 20.9999H9.94386C10.3327 20.9999 10.6479 20.6847 10.6479 20.2959V16.4159C10.6479 16.0271 10.3327 15.7119 9.94386 15.7119Z' />
      <path d='M14.0959 17.408H24.1359C24.4012 17.408 24.6555 17.3026 24.8431 17.1151C25.0306 16.9275 25.1359 16.6732 25.1359 16.408C25.1359 16.1427 25.0306 15.8884 24.8431 15.7009C24.6555 15.5133 24.4012 15.408 24.1359 15.408H14.0959C13.8307 15.408 13.5764 15.5133 13.3888 15.7009C13.2013 15.8884 13.0959 16.1427 13.0959 16.408C13.0959 16.6732 13.2013 16.9275 13.3888 17.1151C13.5764 17.3026 13.8307 17.408 14.0959 17.408Z' />
      <path d='M25.5039 19.312H14.0959C13.8307 19.312 13.5764 19.4174 13.3888 19.6049C13.2013 19.7924 13.0959 20.0468 13.0959 20.312C13.0959 20.5772 13.2013 20.8316 13.3888 21.0191C13.5764 21.2067 13.8307 21.312 14.0959 21.312H25.5039C25.7692 21.312 26.0235 21.2067 26.2111 21.0191C26.3986 20.8316 26.5039 20.5772 26.5039 20.312C26.5039 20.0468 26.3986 19.7924 26.2111 19.6049C26.0235 19.4174 25.7692 19.312 25.5039 19.312V19.312Z' />
      <path d='M14.0959 7.88794H24.1359C24.4012 7.88794 24.6555 7.78258 24.8431 7.59505C25.0306 7.40751 25.1359 7.15316 25.1359 6.88794C25.1359 6.62272 25.0306 6.36837 24.8431 6.18083C24.6555 5.9933 24.4012 5.88794 24.1359 5.88794H14.0959C13.8307 5.88794 13.5764 5.9933 13.3888 6.18083C13.2013 6.36837 13.0959 6.62272 13.0959 6.88794C13.0959 7.15316 13.2013 7.40751 13.3888 7.59505C13.5764 7.78258 13.8307 7.88794 14.0959 7.88794Z' />
      <path d='M25.5039 9.79199H14.0959C13.8307 9.79199 13.5764 9.89735 13.3888 10.0849C13.2013 10.2724 13.0959 10.5268 13.0959 10.792C13.0959 11.0572 13.2013 11.3116 13.3888 11.4991C13.5764 11.6866 13.8307 11.792 14.0959 11.792H25.5039C25.7692 11.792 26.0235 11.6866 26.2111 11.4991C26.3986 11.3116 26.5039 11.0572 26.5039 10.792C26.5039 10.5268 26.3986 10.2724 26.2111 10.0849C26.0235 9.89735 25.7692 9.79199 25.5039 9.79199V9.79199Z' />
    </svg>
  );
};

export const Focus = () => {
  return (
    <svg viewBox='0 0 32 32'>
      <path d='M31.368 20.672C31.2703 19.9419 30.9089 19.2728 30.3518 18.7909C29.7947 18.3089 29.0805 18.0476 28.344 18.056C27.7707 18.0699 27.2056 18.1949 26.68 18.424V13.064C26.6896 12.6675 26.62 12.273 26.4753 11.9037C26.3307 11.5343 26.1138 11.1976 25.8375 10.913C25.5611 10.6285 25.2308 10.4019 24.8658 10.2465C24.5009 10.0911 24.1086 10.01 23.712 10.008C23.4208 9.61344 23.037 9.2965 22.5946 9.08509C22.1521 8.87367 21.6644 8.77425 21.1745 8.79559C20.6845 8.81693 20.2074 8.95836 19.7849 9.20744C19.3625 9.45652 19.0078 9.80562 18.752 10.224L18.456 10.272V9.16801C18.4595 8.46886 18.2231 7.78966 17.7864 7.24371C17.3496 6.69776 16.7388 6.31808 16.056 6.16801C15.9527 5.49034 15.6198 4.86869 15.113 4.40707C14.6062 3.94544 13.9563 3.67183 13.272 3.63201C13.0149 3.21523 12.6597 2.86772 12.2373 2.61982C11.815 2.37192 11.3384 2.23118 10.8492 2.20987C10.36 2.18857 9.87296 2.28735 9.43069 2.49759C8.98842 2.70784 8.60434 3.02315 8.31198 3.41601C7.91331 3.41482 7.51845 3.49354 7.1507 3.6475C6.78296 3.80147 6.4498 4.02756 6.1709 4.31243C5.89199 4.59731 5.673 4.93518 5.52685 5.30609C5.3807 5.67701 5.31036 6.07345 5.31998 6.47201V11.832C4.79434 11.6029 4.22923 11.4779 3.65598 11.464C2.91943 11.4556 2.20524 11.7169 1.64816 12.1989C1.09108 12.6808 0.729625 13.3499 0.631981 14.08C0.552507 14.8597 0.761925 15.6414 1.22052 16.277C1.67911 16.9125 2.35499 17.3577 3.11998 17.528C3.84798 17.736 5.51998 19.376 6.53598 20.728C7.14245 21.583 7.94476 22.2804 8.87584 22.7619C9.80692 23.2435 10.8397 23.4952 11.888 23.496H12.272C12.7022 23.4723 13.1286 23.4026 13.544 23.288V23.368C13.5253 25.0649 14.1548 26.7051 15.3039 27.9538C16.4531 29.2026 18.0353 29.9659 19.728 30.088H20.112C21.1602 30.0872 22.193 29.8355 23.1241 29.3539C24.0552 28.8724 24.8575 28.175 25.464 27.32C26.504 25.968 28.152 24.32 28.88 24.12C29.645 23.9497 30.3209 23.5045 30.7794 22.869C31.238 22.2334 31.4475 21.4517 31.368 20.672V20.672ZM13.544 15.76V21.36C13.1048 21.5353 12.6401 21.638 12.168 21.664H11.888C11.1271 21.6662 10.3769 21.4858 9.7003 21.1377C9.02372 20.7897 8.4406 20.2843 7.99998 19.664C7.99998 19.664 5.43198 16.312 3.59998 15.8C1.76798 15.288 2.27198 13.256 3.65598 13.256C5.03998 13.256 7.11198 15.136 7.11198 15.136V6.47201C7.10566 6.18989 7.19576 5.91405 7.36739 5.69005C7.53903 5.46606 7.78193 5.3073 8.05598 5.24001C8.14112 5.23177 8.22685 5.23177 8.31198 5.24001H8.47998V11.888C8.47998 12.1002 8.56427 12.3037 8.7143 12.4537C8.86432 12.6037 9.06781 12.688 9.27998 12.688C9.49215 12.688 9.69564 12.6037 9.84567 12.4537C9.9957 12.3037 10.08 12.1002 10.08 11.888V4.17601C10.2645 4.06028 10.4781 3.99925 10.696 4.00001C10.8701 4.00007 11.0422 4.0383 11.2 4.11201V12.04C11.2 12.2522 11.2843 12.4557 11.4343 12.6057C11.5843 12.7557 11.7878 12.84 12 12.84C12.2122 12.84 12.4156 12.7557 12.5657 12.6057C12.7157 12.4557 12.8 12.2522 12.8 12.04V5.46401C12.8931 5.45583 12.9868 5.45583 13.08 5.46401C13.38 5.47598 13.6649 5.59852 13.88 5.80801V11.568C13.88 11.7802 13.9643 11.9837 14.1143 12.1337C14.2643 12.2837 14.4678 12.368 14.68 12.368C14.8922 12.368 15.0956 12.2837 15.2457 12.1337C15.3957 11.9837 15.48 11.7802 15.48 11.568V7.92001H15.624C15.909 7.97652 16.1649 8.13196 16.3464 8.35886C16.5279 8.58577 16.6234 8.86953 16.616 9.16001V11.264C16.268 11.7066 16.0542 12.2396 16 12.8C15.3135 12.9374 14.695 13.3064 14.2479 13.8452C13.8009 14.384 13.5524 15.0599 13.544 15.76ZM28.4 22.4C26.568 22.904 24.016 26.264 24.016 26.264C23.5773 26.8924 22.9932 27.4054 22.3134 27.7592C21.6336 28.113 20.8783 28.2972 20.112 28.296H19.832C18.5985 28.1967 17.4488 27.6325 16.6156 26.7176C15.7823 25.8027 15.3278 24.6054 15.344 23.368V15.76C15.3408 15.4873 15.4277 15.2211 15.5911 15.0027C15.7545 14.7843 15.9854 14.6259 16.248 14.552V19.44C16.248 19.6522 16.3323 19.8557 16.4823 20.0057C16.6323 20.1557 16.8358 20.24 17.048 20.24C17.2602 20.24 17.4636 20.1557 17.6137 20.0057C17.7637 19.8557 17.848 19.6522 17.848 19.44V12.688C17.9448 12.4849 18.0965 12.3128 18.2859 12.1912C18.4753 12.0697 18.6949 12.0034 18.92 12C19.0147 12.0009 19.1088 12.0144 19.2 12.04V19.24C19.2 19.4522 19.2843 19.6557 19.4343 19.8057C19.5843 19.9557 19.7878 20.04 20 20.04C20.2122 20.04 20.4156 19.9557 20.5657 19.8057C20.7157 19.6557 20.8 19.4522 20.8 19.24V10.704C21.0062 10.6069 21.2363 10.5718 21.4621 10.6031C21.688 10.6343 21.8998 10.7305 22.072 10.88V19.136C22.072 19.3482 22.1563 19.5517 22.3063 19.7017C22.4563 19.8517 22.6598 19.936 22.872 19.936C23.0842 19.936 23.2876 19.8517 23.4377 19.7017C23.5877 19.5517 23.672 19.3482 23.672 19.136V11.808C23.7571 11.7998 23.8428 11.7998 23.928 11.808C24.202 11.8753 24.4449 12.0341 24.6166 12.2581C24.7882 12.482 24.8783 12.7579 24.872 13.04V21.728C24.872 21.728 26.96 19.848 28.328 19.848C29.696 19.848 30.264 21.872 28.4 22.4Z' />
      <path d='M21.544 6.50396C21.6286 6.53471 21.7179 6.55094 21.808 6.55196C21.9743 6.55072 22.1361 6.49766 22.2709 6.40016C22.4057 6.30266 22.5067 6.16557 22.56 6.00796L23.464 3.39996C23.5114 3.29842 23.5369 3.18806 23.539 3.07601C23.541 2.96397 23.5195 2.85275 23.4758 2.74955C23.4321 2.64636 23.3672 2.5535 23.2853 2.47698C23.2034 2.40047 23.1064 2.34201 23.0005 2.30539C22.8946 2.26877 22.7822 2.25481 22.6705 2.26442C22.5589 2.27402 22.4505 2.30698 22.3524 2.36115C22.2543 2.41532 22.1687 2.48949 22.1011 2.57886C22.0335 2.66824 21.9854 2.77082 21.96 2.87996L21.048 5.48796C20.9791 5.68847 20.9927 5.90809 21.0857 6.09859C21.1787 6.28908 21.3435 6.43488 21.544 6.50396V6.50396Z' />
      <path d='M18.7919 6.30413H18.8479C18.9531 6.29703 19.0558 6.26922 19.1502 6.2223C19.2445 6.17539 19.3287 6.11029 19.3978 6.03075C19.467 5.95121 19.5197 5.85879 19.553 5.7588C19.5863 5.65882 19.5996 5.55324 19.5919 5.44813L19.3839 2.52013C19.3691 2.30795 19.2706 2.11037 19.11 1.97084C19.0305 1.90176 18.9382 1.849 18.8384 1.81559C18.7385 1.78218 18.633 1.76877 18.5279 1.77613C18.3158 1.79098 18.1182 1.88951 17.9787 2.05004C17.8391 2.21057 17.7691 2.41995 17.7839 2.63213L17.9919 5.60013C18.0155 5.79526 18.1101 5.97487 18.2577 6.10472C18.4052 6.23456 18.5954 6.30555 18.7919 6.30413Z' />
      <path d='M24.32 8.22397C24.4316 8.22371 24.542 8.20008 24.6439 8.15462C24.7459 8.10915 24.8372 8.04285 24.912 7.95997L26.896 5.79197C27.0392 5.63496 27.1142 5.42749 27.1044 5.2152C27.0947 5.00291 27.001 4.80319 26.844 4.65997C26.687 4.51676 26.4795 4.44178 26.2672 4.45153C26.0549 4.46128 25.8552 4.55496 25.712 4.71197L23.736 6.88797C23.5981 7.04329 23.526 7.24616 23.5349 7.45369C23.5439 7.66121 23.6332 7.85712 23.784 7.99997C23.9283 8.13916 24.1196 8.2191 24.32 8.22397Z' />
    </svg>
  );
};

export const Info = () => {
  return (
    <svg viewBox='0 0 330 330'>
      <g>
        <g>
          <path
            d='M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z    M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z'
            data-original='#000000'
            className='active-path'
            data-old_color='#000000'
          />
          <path
            d='M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991   c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z'
            data-original='#000000'
            className='active-path'
            data-old_color='#000000'
          />
          <path
            d='M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z   '
            data-original='#000000'
            className='active-path'
            data-old_color='#000000'
          />
        </g>
      </g>
    </svg>
  );
};

export const Warning = () => {
  return (
    <svg viewBox='0 0 512.001 512.001'>
      <g>
        <g>
          <path
            d='M503.839,395.379l-195.7-338.962C297.257,37.569,277.766,26.315,256,26.315c-21.765,0-41.257,11.254-52.139,30.102
              L8.162,395.378c-10.883,18.85-10.883,41.356,0,60.205c10.883,18.849,30.373,30.102,52.139,30.102h391.398
              c21.765,0,41.256-11.254,52.14-30.101C514.722,436.734,514.722,414.228,503.839,395.379z M477.861,440.586
              c-5.461,9.458-15.241,15.104-26.162,15.104H60.301c-10.922,0-20.702-5.646-26.162-15.104c-5.46-9.458-5.46-20.75,0-30.208
              L229.84,71.416c5.46-9.458,15.24-15.104,26.161-15.104c10.92,0,20.701,5.646,26.161,15.104l195.7,338.962
              C483.321,419.836,483.321,431.128,477.861,440.586z'
          />
        </g>
      </g>
      <g>
        <g>
          <rect x='241.001' y='176.01' width='29.996' height='149.982' />
        </g>
      </g>
      <g>
        <g>
          <path
            d='M256,355.99c-11.027,0-19.998,8.971-19.998,19.998s8.971,19.998,19.998,19.998c11.026,0,19.998-8.971,19.998-19.998
              S267.027,355.99,256,355.99z'
          />
        </g>
      </g>
    </svg>
  );
};

/**
 * Client
 */

export const Move = () => {
  return (
    <svg viewBox='0 0 640 512'>
      <path d='M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 208a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80zm384-208a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 208a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80zM401 210.73a24 24 0 0 0 15 5.27h64a24 24 0 0 0 0-48h-55.59L351 109.27a24 24 0 0 0-30.62.51l-104 89.11a32 32 0 0 0 3.06 50.94l76.53 51V416a24 24 0 0 0 48 0V288a24 24 0 0 0-10.69-20l-50.11-33.4 71.29-61.1z' />
    </svg>
  );
};

export const StartThread = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <path d='M368 168H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-96 96H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z' />
    </svg>
  );
};

export const Bookmark = () => {
  return (
    <svg viewBox='0 0 384 512'>
      <path d='M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z' />
    </svg>
  );
};

export const More = () => {
  return (
    <svg viewBox='0 0 128 512'>
      <path d='M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z' />
    </svg>
  );
};

export const Present = () => {
  return (
    <svg viewBox='0 0 503.467 503.467'>
      <g>
        <g>
          <g>
            <path
              d='M482.133,124.267H364.8c33.067-37.333,40.533-84.267,16-108.8c-9.6-9.6-22.4-14.933-37.333-14.933    c-24.533,0-51.2,13.867-73.6,37.333c-7.467,7.467-13.867,16-18.133,24.533c-5.333-7.467-10.667-16-18.133-23.467    C211.2,15.466,183.466,1.6,160,1.6c-14.933,0-27.733,5.333-37.333,13.867c-24.533,24.533-17.067,71.467,16,108.8H21.333    C9.6,124.267,0,133.867,0,145.6v82.133c0,11.733,9.6,21.333,21.333,21.333h37.333V481.6c0,11.733,9.6,21.333,21.333,21.333    h343.467c11.733,0,21.333-9.6,21.333-20.267v-233.6h36.267c11.733,0,21.333-9.6,22.4-20.267v-83.2    C503.467,133.867,493.867,124.267,482.133,124.267z M154.667,45.333c1.067-2.133,4.267-2.133,6.4-2.133    c8.533,0,25.6,6.4,42.667,23.467c22.4,24.533,25.6,49.067,20.267,55.467c-1.067,2.133-4.267,2.133-6.4,2.133    c-8.533,0-25.6-6.4-42.667-23.467C152.533,76.267,149.333,51.733,154.667,45.333z M230.4,461.334H100.267V249.067H230.4V461.334z     M230.4,207.467H42.667v-41.6H230.4V207.467z M301.867,66.667c16-17.067,33.067-23.467,42.667-23.467c2.133,0,5.333,0,6.4,2.133    c6.4,6.4,2.133,32-20.267,55.467c-16,17.067-33.067,23.467-42.667,23.467c-2.133,0-5.333,0-6.4-2.133    C275.2,115.734,279.467,90.133,301.867,66.667z M402.133,461.334H273.067V249.067h129.067V461.334z M273.067,207.467v-41.6    h186.667v41.6H273.067z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Magnify = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <g>
        <g>
          <g>
            <path
              d='M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474    c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323    c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848    S326.847,409.323,225.474,409.323z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328    c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

/**
 * Mention Page
 * @param
 */
export const Settings = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <path d='M496 72H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v24H16C7.2 72 0 79.2 0 88v16c0 8.8 7.2 16 16 16h208v24c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-24h208c8.8 0 16-7.2 16-16V88c0-8.8-7.2-16-16-16zm0 320H160v-24c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v24H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h80v24c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-24h336c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm0-160h-80v-24c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v24H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h336v24c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-24h80c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z' />
    </svg>
  );
};

export const Transition = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <path d='M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z' />
    </svg>
  );
};

/**
 * Sidebar Sections
 */

export const Play = () => {
  return (
    <svg viewBox='0 0 494.148 494.148'>
      <g>
        <g>
          <g>
            <path
              d='M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124    c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884    C432.632,229.572,422.964,213.288,405.284,201.188z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Plus = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <g>
        <g>
          <g>
            <path
              d='M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Close = () => {
  return (
    <svg viewBox='0 0 512.001 512.001'>
      <g>
        <g>
          <g>
            <path
              d='M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Lock = () => {
  return (
    <svg viewBox='0 0 448 512'>
      <path d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z' />
    </svg>
  );
};

/**
 * Sidebar Options
 */

export const Threads = () => {
  return (
    <svg viewBox='0 0 511.606 511.606'>
      <g>
        <path
          d='m436.594 74.943c-99.917-99.917-261.637-99.932-361.568 0-80.348 80.347-95.531 199.817-48.029 294.96l-26.335 115.839c-3.423 15.056 10.071 28.556 25.133 25.133l115.839-26.335c168.429 84.092 369.846-37.653 369.846-228.813 0-68.289-26.595-132.493-74.886-180.784zm-242.416 385.371c22.646-19.619 34.932-47.807 34.932-76.506 0-11.598-9.402-21-21-21s-21 9.402-21 21c0 27.866-19.748 52.26-46.957 58.002-.426.089 3.534-.808-91.141 20.715l20.646-90.813c1.127-4.959.417-10.159-2-14.633-75.972-140.691 25.727-315.022 188.152-315.022 117.818 0 213.67 95.852 213.67 213.67 0 142.313-137.577 245.923-275.302 204.587z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m362.477 192.061h-213.334c-11.598 0-21 9.402-21 21s9.402 21 21 21h213.334c11.598 0 21-9.402 21-21s-9.403-21-21-21z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m309.143 277.394h-160c-11.598 0-21 9.402-21 21s9.402 21 21 21h160c11.598 0 21-9.402 21-21s-9.402-21-21-21z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
      </g>
    </svg>
  );
};

export const MentionReaction = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <g>
        <path
          d='m512 256c0 11.046-8.954 20-20 20s-20-8.954-20-20c0-119.103-96.897-216-216-216s-216 96.897-216 216 96.897 216 216 216c34.845 0 68.098-8.035 98.835-23.883 9.819-5.063 21.88-1.207 26.941 8.611 5.062 9.817 1.206 21.88-8.611 26.941-35.946 18.534-76.462 28.331-117.165 28.331-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02zm-24.138 72.782c7.962 7.656 8.21 20.316.555 28.279-16.083 16.727-37.718 25.939-60.917 25.939-32.312 0-60.433-18.238-74.644-44.953-23.314 27.479-58.08 44.953-96.856 44.953-70.028 0-127-56.972-127-127s56.972-127 127-127 127 56.972 127 127v42.5c0 24.537 19.963 44.5 44.5 44.5 12.218 0 23.611-4.853 32.083-13.663 7.654-7.962 20.316-8.211 28.279-.555zm-144.862-72.782c0-47.972-39.028-87-87-87s-87 39.028-87 87 39.028 87 87 87 87-39.028 87-87z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
      </g>
    </svg>
  );
};

interface Props {}

export const SavedItems = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <g>
        <g>
          <g>
            <path
              d='M429.998,431.996c-11.046,0-20,8.954-20,20c0,5.576-1.889,10.268-5.615,13.947c-3.91,3.861-9.583,6.098-15.132,6.054    c-5.475-0.07-9.919-1.935-13.587-5.705L270.333,358.048c-3.765-3.869-8.935-6.052-14.333-6.052s-10.568,2.183-14.333,6.052    L136.335,466.292c-3.641,3.742-8.118,5.608-13.686,5.706c-5.61,0.115-11.257-2.12-15.14-5.936    c-3.655-3.591-5.508-8.206-5.508-13.718V79.999c0-22.056,17.944-40,40-40h227.997c22.056,0,40,17.944,40,40v272.997    c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V79.999C449.997,35.888,414.11,0,369.998,0H142.001    C97.889,0,62.002,35.888,62.002,79.999v372.345c0,16.174,6.206,31.179,17.474,42.25C90.77,505.69,106.32,512,122.288,512    c0.355,0,0.711-0.003,1.066-0.009c16.191-0.285,30.592-6.441,41.648-17.804L256,400.673l90.998,93.514    c11.136,11.444,25.572,17.601,41.747,17.806c16.236,0.167,32.215-6.204,43.742-17.588c11.292-11.149,17.51-26.211,17.51-42.409    C449.998,440.95,441.044,431.996,429.998,431.996z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Drafts = () => {
  return (
    <svg viewBox='0 0 24 24'>
      <g>
        <path
          d='m6.75 5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m11.75 5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m16.25 5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m17.25 18.5h-10.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5c.414 0 .75.336.75.75s-.336.75-.75.75z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m17.25 14.5h-10.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5c.414 0 .75.336.75.75s-.336.75-.75.75z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m12.25 10.5h-5.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.5c.414 0 .75.336.75.75s-.336.75-.75.75z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
        <path
          d='m18.25 24h-13.5c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h13.5c1.517 0 2.75 1.233 2.75 2.75v16.5c0 1.517-1.233 2.75-2.75 2.75zm-13.5-20.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h13.5c.689 0 1.25-.561 1.25-1.25v-16.5c0-.689-.561-1.25-1.25-1.25z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
      </g>
    </svg>
  );
};

export const People = () => {
  return (
    <svg viewBox='0 0 496 496'>
      <g>
        <path
          d='m419.5 0h-304c-26.468 0-48 21.533-48 48v43.025c-21.594.534-39 18.254-39 39.975v14c0 21.721 17.406 39.44 39 39.975v126.051c-21.594.534-39 18.254-39 39.975v14c0 21.721 17.406 39.44 39 39.975v43.024c0 26.467 21.532 48 48 48h304c26.468 0 48-21.533 48-48v-400c0-26.467-21.532-48-48-48zm-359 145v-14c0-4.411 3.589-8 8-8h30c4.411 0 8 3.589 8 8v14c0 4.411-3.589 8-8 8h-30c-4.411 0-8-3.589-8-8zm0 220v-14c0-4.411 3.589-8 8-8h30c4.411 0 8 3.589 8 8v14c0 4.411-3.589 8-8 8h-30c-4.411 0-8-3.589-8-8zm375 83c0 8.822-7.178 16-16 16h-304c-8.822 0-16-7.178-16-16v-43.025c21.594-.534 39-18.254 39-39.975v-14c0-21.721-17.406-39.44-39-39.975v-126.05c21.594-.534 39-18.254 39-39.975v-14c0-21.721-17.406-39.44-39-39.975v-43.025c0-8.822 7.178-16 16-16h304c8.822 0 16 7.178 16 16zm-152.24-195.218c38.76 0 70.293-31.533 70.293-70.293s-31.533-70.293-70.293-70.293-70.293 31.534-70.293 70.293 31.533 70.293 70.293 70.293zm0-108.586c21.115 0 38.293 17.178 38.293 38.293s-17.178 38.293-38.293 38.293-38.293-17.178-38.293-38.293 17.178-38.293 38.293-38.293zm108.74 182.141v31.467c0 8.836-7.163 16-16 16s-16-7.164-16-16v-31.467c0-4.498-2.653-8.589-6.761-10.423l-33.284-14.861h-73.91l-33.284 14.861c-4.107 1.833-6.761 5.925-6.761 10.423v31.467c0 8.836-7.163 16-16 16s-16-7.164-16-16v-31.467c0-17.107 10.094-32.668 25.714-39.643 39.519-17.645 38.368-17.642 42.921-17.642 87.437 0 82.904-.552 87.254 1.39l36.397 16.251c15.62 6.976 25.714 22.537 25.714 39.644z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
      </g>
    </svg>
  );
};

export const Apps = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <g>
        <g>
          <g>
            <path
              d='M176.792,0H59.208C26.561,0,0,26.561,0,59.208v117.584C0,209.439,26.561,236,59.208,236h117.584    C209.439,236,236,209.439,236,176.792V59.208C236,26.561,209.439,0,176.792,0z M196,176.792c0,10.591-8.617,19.208-19.208,19.208    H59.208C48.617,196,40,187.383,40,176.792V59.208C40,48.617,48.617,40,59.208,40h117.584C187.383,40,196,48.617,196,59.208    V176.792z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M452,0H336c-33.084,0-60,26.916-60,60v116c0,33.084,26.916,60,60,60h116c33.084,0,60-26.916,60-60V60    C512,26.916,485.084,0,452,0z M472,176c0,11.028-8.972,20-20,20H336c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h116    c11.028,0,20,8.972,20,20V176z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M176.792,276H59.208C26.561,276,0,302.561,0,335.208v117.584C0,485.439,26.561,512,59.208,512h117.584    C209.439,512,236,485.439,236,452.792V335.208C236,302.561,209.439,276,176.792,276z M196,452.792    c0,10.591-8.617,19.208-19.208,19.208H59.208C48.617,472,40,463.383,40,452.792V335.208C40,324.617,48.617,316,59.208,316h117.584    c10.591,0,19.208,8.617,19.208,19.208V452.792z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M452,276H336c-33.084,0-60,26.916-60,60v116c0,33.084,26.916,60,60,60h116c33.084,0,60-26.916,60-60V336    C512,302.916,485.084,276,452,276z M472,452c0,11.028-8.972,20-20,20H336c-11.028,0-20-8.972-20-20V336c0-11.028,8.972-20,20-20    h116c11.028,0,20,8.972,20,20V452z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Files = () => {
  return (
    <svg viewBox='0 0 386.617 386.617'>
      <g>
        <g>
          <g>
            <path
              d='M349.869,84.591L228.748,9.142c-19.564-12.187-51.306-12.192-70.879,0L36.748,84.591    c-19.564,12.187-19.573,31.96,0,44.152l121.121,75.449c19.564,12.187,51.306,12.192,70.879,0l121.121-75.449    C369.433,116.556,369.442,96.783,349.869,84.591z M211.584,168.669c-9.98,6.333-26.202,6.307-36.14,0l-97.578-61.923    l97.578-61.734c9.98-6.314,26.202-6.287,36.14,0l97.578,61.734L211.584,168.669z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M349.869,172.542l-2.527-1.574l-127.273,80.305l-0.047-0.007l-8.438,5.354c-9.98,6.333-26.202,6.307-36.14,0    l-97.578-61.923l0.022-0.014l-38.131-24.017l-3.01,1.875c-19.564,12.187-19.573,31.96,0,44.152l121.121,75.449    c19.564,12.187,51.306,12.192,70.879,0l121.121-75.449C369.433,204.507,369.442,184.734,349.869,172.542z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M349.869,257.875l-2.527-1.574l-127.273,80.305l-0.047-0.007l-8.438,5.354c-9.98,6.333-26.202,6.307-36.14,0    L77.867,280.03l0.022-0.014L39.758,256l-3.01,1.875c-19.564,12.187-19.573,31.96,0,44.152l121.121,75.449    c19.564,12.187,51.306,12.192,70.879,0l121.121-75.449C369.433,289.84,369.442,270.067,349.869,257.875z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const ShowLess = () => {
  return (
    <svg viewBox='0 0 64 64'>
      <g>
        <path
          d='m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
      </g>
    </svg>
  );
};

/**
 * Sidebar Content
 */

export const AtSign = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <g>
        <g>
          <g>
            <path
              d='M226.735,1.636C111.259,14.518,17.472,106.202,2.285,221.396c-21.518,163.24,111.938,302.116,273.589,289.849    c59.464-4.513,115.124-31.086,158.736-71.759l3.746-3.492c4.309-4.018,4.544-10.768,0.526-15.076l-14.555-15.607    c-4.018-4.309-10.767-4.544-15.076-0.526l-7.803,7.277c-48.51,45.232-115.104,65.582-182.284,54.141    c-95.215-16.216-168.411-97.052-175.846-193.352C33.487,145.508,136.207,39.093,262.324,42.758    c116.288,3.381,207.009,102.616,207.009,218.953v15.622c0,24.934-21.486,44.932-46.921,42.46    C400.246,317.637,384,297.714,384,275.442v-94.108c0-5.892-4.776-10.667-10.667-10.667H352c-4.283,0-7.921,2.56-9.618,6.203    c-21.465-23.413-52.19-38.203-86.382-38.203c-64.698,0-117.333,52.635-117.333,117.333S191.302,373.334,256,373.334    c40.755,0,76.691-20.909,97.732-52.54c15.842,26.475,45.276,43.922,78.78,41.677c45.303-3.035,79.488-42.746,79.488-88.15V256    C512,105.202,380.931-15.566,226.735,1.636z M256,330.667c-41.167,0-74.667-33.5-74.667-74.667    c0-41.167,33.5-74.667,74.667-74.667c41.167,0,74.667,33.5,74.667,74.667C330.667,297.167,297.167,330.667,256,330.667z'
              data-original='#000000'
              className='active-path'
              data-old_color='#000000'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
