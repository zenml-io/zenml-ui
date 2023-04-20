import React from 'react';

export const Running: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
};

export const Completed: React.FC = () => {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.475 8.65039L9.70562 13.2004L7.325 10.9254" stroke="#37C4A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.9 18.3998C15.2078 18.3998 18.7 14.9076 18.7 10.5998C18.7 6.29198 15.2078 2.7998 10.9 2.7998C6.59218 2.7998 3.10001 6.29198 3.10001 10.5998C3.10001 14.9076 6.59218 18.3998 10.9 18.3998Z" stroke="#37C4A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
};

export const Cached: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  );
};

export const Failed: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
};

export const Analysis: React.FC = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.371 1.888 11.113C0.629333 9.85433 0 8.31667 0 6.5C0 4.68333 0.629333 3.14567 1.888 1.887C3.146 0.629 4.68333 0 6.5 0C8.31667 0 9.85433 0.629 11.113 1.887C12.371 3.14567 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5627 8.81267 11 7.75 11 6.5C11 5.25 10.5627 4.18733 9.688 3.312C8.81267 2.43733 7.75 2 6.5 2C5.25 2 4.18733 2.43733 3.312 3.312C2.43733 4.18733 2 5.25 2 6.5C2 7.75 2.43733 8.81267 3.312 9.688C4.18733 10.5627 5.25 11 6.5 11Z" fill="#443E99" />
    </svg>

  );
};

export const Statistic: React.FC = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16V5H4V16H0ZM6 16V0H10V16H6ZM12 16V9H16V16H12Z" fill="#443E99" />
    </svg>

  );
};

export const Database: React.FC = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 8C6.5 8 4.375 7.60833 2.625 6.825C0.875 6.04167 0 5.1 0 4C0 2.9 0.875 1.95833 2.625 1.175C4.375 0.391667 6.5 0 9 0C11.5 0 13.625 0.391667 15.375 1.175C17.125 1.95833 18 2.9 18 4C18 5.1 17.125 6.04167 15.375 6.825C13.625 7.60833 11.5 8 9 8ZM9 13C6.5 13 4.375 12.6083 2.625 11.825C0.875 11.0417 0 10.1 0 9V6.5C0 7.23333 0.341667 7.85433 1.025 8.363C1.70833 8.871 2.525 9.28333 3.475 9.6C4.425 9.91667 5.41267 10.1457 6.438 10.287C7.46267 10.429 8.31667 10.5 9 10.5C9.68333 10.5 10.5373 10.429 11.562 10.287C12.5873 10.1457 13.575 9.91667 14.525 9.6C15.475 9.28333 16.2917 8.871 16.975 8.363C17.6583 7.85433 18 7.23333 18 6.5V9C18 10.1 17.125 11.0417 15.375 11.825C13.625 12.6083 11.5 13 9 13ZM9 18C6.5 18 4.375 17.6083 2.625 16.825C0.875 16.0417 0 15.1 0 14V11.5C0 12.2333 0.341667 12.8543 1.025 13.363C1.70833 13.871 2.525 14.2833 3.475 14.6C4.425 14.9167 5.41267 15.146 6.438 15.288C7.46267 15.4293 8.31667 15.5 9 15.5C9.68333 15.5 10.5373 15.4293 11.562 15.288C12.5873 15.146 13.575 14.9167 14.525 14.6C15.475 14.2833 16.2917 13.871 16.975 13.363C17.6583 12.8543 18 12.2333 18 11.5V14C18 15.1 17.125 16.0417 15.375 16.825C13.625 17.6083 11.5 18 9 18Z" fill="#443E99" />
    </svg>

  );
};
export const Data: React.FC = () => {
  return (
    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8 16.0009C21.5117 16.0009 26.142 13.4753 26.142 10.3598C26.142 7.24434 21.5117 4.71875 15.8 4.71875C10.0883 4.71875 5.45803 7.24434 5.45803 10.3598C5.45803 13.4753 10.0883 16.0009 15.8 16.0009Z" stroke="#443E99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.45803 10.3594V16.0004C5.45803 19.1148 10.0884 21.6415 15.8 21.6415C21.5116 21.6415 26.142 19.1148 26.142 16.0004V10.3594" stroke="#443E99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.45803 16.001V21.642C5.45803 24.7564 10.0884 27.2831 15.8 27.2831C21.5116 27.2831 26.142 24.7564 26.142 21.642V16.001" stroke="#443E99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>



  );
};

export const Model: React.FC = () => {
  return (
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 23C5.16667 23 4.45833 22.7083 3.875 22.125C3.29167 21.5417 3 20.8333 3 20C3 19.1667 3.29167 18.4583 3.875 17.875C4.45833 17.2917 5.16667 17 6 17C6.23333 17 6.45 17.025 6.65 17.075C6.85 17.125 7.04167 17.1917 7.225 17.275L8.65 15.5C8.18333 14.9833 7.85833 14.4 7.675 13.75C7.49167 13.1 7.45 12.45 7.55 11.8L5.525 11.125C5.24167 11.5417 4.88333 11.875 4.45 12.125C4.01667 12.375 3.53333 12.5 3 12.5C2.16667 12.5 1.45833 12.2083 0.875 11.625C0.291667 11.0417 0 10.3333 0 9.5C0 8.66667 0.291667 7.95833 0.875 7.375C1.45833 6.79167 2.16667 6.5 3 6.5C3.83333 6.5 4.54167 6.79167 5.125 7.375C5.70833 7.95833 6 8.66667 6 9.5V9.7L8.025 10.4C8.35833 9.8 8.80433 9.29167 9.363 8.875C9.921 8.45833 10.55 8.19167 11.25 8.075V5.9C10.6 5.71667 10.0623 5.36233 9.637 4.837C9.21233 4.31233 9 3.7 9 3C9 2.16667 9.29167 1.45833 9.875 0.875C10.4583 0.291667 11.1667 0 12 0C12.8333 0 13.5417 0.291667 14.125 0.875C14.7083 1.45833 15 2.16667 15 3C15 3.7 14.7833 4.31233 14.35 4.837C13.9167 5.36233 13.3833 5.71667 12.75 5.9V8.075C13.45 8.19167 14.0793 8.45833 14.638 8.875C15.196 9.29167 15.6417 9.8 15.975 10.4L18 9.7V9.5C18 8.66667 18.2917 7.95833 18.875 7.375C19.4583 6.79167 20.1667 6.5 21 6.5C21.8333 6.5 22.5417 6.79167 23.125 7.375C23.7083 7.95833 24 8.66667 24 9.5C24 10.3333 23.7083 11.0417 23.125 11.625C22.5417 12.2083 21.8333 12.5 21 12.5C20.4667 12.5 19.9793 12.375 19.538 12.125C19.096 11.875 18.7417 11.5417 18.475 11.125L16.45 11.8C16.55 12.45 16.5083 13.0957 16.325 13.737C16.1417 14.379 15.8167 14.9667 15.35 15.5L16.775 17.25C16.9583 17.1667 17.15 17.104 17.35 17.062C17.55 17.0207 17.7667 17 18 17C18.8333 17 19.5417 17.2917 20.125 17.875C20.7083 18.4583 21 19.1667 21 20C21 20.8333 20.7083 21.5417 20.125 22.125C19.5417 22.7083 18.8333 23 18 23C17.1667 23 16.4583 22.7083 15.875 22.125C15.2917 21.5417 15 20.8333 15 20C15 19.6667 15.0543 19.346 15.163 19.038C15.271 18.7293 15.4167 18.45 15.6 18.2L14.175 16.425C13.4917 16.8083 12.7627 17 11.988 17C11.2127 17 10.4833 16.8083 9.8 16.425L8.4 18.2C8.58333 18.45 8.72933 18.7293 8.838 19.038C8.946 19.346 9 19.6667 9 20C9 20.8333 8.70833 21.5417 8.125 22.125C7.54167 22.7083 6.83333 23 6 23ZM3 10.5C3.28333 10.5 3.521 10.404 3.713 10.212C3.90433 10.0207 4 9.78333 4 9.5C4 9.21667 3.90433 8.979 3.713 8.787C3.521 8.59567 3.28333 8.5 3 8.5C2.71667 8.5 2.47933 8.59567 2.288 8.787C2.096 8.979 2 9.21667 2 9.5C2 9.78333 2.096 10.0207 2.288 10.212C2.47933 10.404 2.71667 10.5 3 10.5ZM6 21C6.28333 21 6.521 20.904 6.713 20.712C6.90433 20.5207 7 20.2833 7 20C7 19.7167 6.90433 19.4793 6.713 19.288C6.521 19.096 6.28333 19 6 19C5.71667 19 5.479 19.096 5.287 19.288C5.09567 19.4793 5 19.7167 5 20C5 20.2833 5.09567 20.5207 5.287 20.712C5.479 20.904 5.71667 21 6 21ZM12 4C12.2833 4 12.521 3.904 12.713 3.712C12.9043 3.52067 13 3.28333 13 3C13 2.71667 12.9043 2.479 12.713 2.287C12.521 2.09567 12.2833 2 12 2C11.7167 2 11.4793 2.09567 11.288 2.287C11.096 2.479 11 2.71667 11 3C11 3.28333 11.096 3.52067 11.288 3.712C11.4793 3.904 11.7167 4 12 4ZM12 15C12.7 15 13.2917 14.7583 13.775 14.275C14.2583 13.7917 14.5 13.2 14.5 12.5C14.5 11.8 14.2583 11.2083 13.775 10.725C13.2917 10.2417 12.7 10 12 10C11.3 10 10.7083 10.2417 10.225 10.725C9.74167 11.2083 9.5 11.8 9.5 12.5C9.5 13.2 9.74167 13.7917 10.225 14.275C10.7083 14.7583 11.3 15 12 15ZM18 21C18.2833 21 18.5207 20.904 18.712 20.712C18.904 20.5207 19 20.2833 19 20C19 19.7167 18.904 19.4793 18.712 19.288C18.5207 19.096 18.2833 19 18 19C17.7167 19 17.4793 19.096 17.288 19.288C17.096 19.4793 17 19.7167 17 20C17 20.2833 17.096 20.5207 17.288 20.712C17.4793 20.904 17.7167 21 18 21ZM21 10.5C21.2833 10.5 21.5207 10.404 21.712 10.212C21.904 10.0207 22 9.78333 22 9.5C22 9.21667 21.904 8.979 21.712 8.787C21.5207 8.59567 21.2833 8.5 21 8.5C20.7167 8.5 20.4793 8.59567 20.288 8.787C20.096 8.979 20 9.21667 20 9.5C20 9.78333 20.096 10.0207 20.288 10.212C20.4793 10.404 20.7167 10.5 21 10.5Z" fill="#443E99" />
    </svg>

  );
};

export const Schema: React.FC = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 16V13H2V16H16ZM16 11V7H2V11H16ZM16 5V2H2V5H16ZM2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2Z" fill="#443E99" />
    </svg>

  );
};

export const Service: React.FC = () => {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 16L4 12H0.5L1 10H4.5L5.5 6H1.5L2 4H6L7 0H9L8 4H12L13 0H15L14 4H17.5L17 6H13.5L12.5 10H16.5L16 12H12L11 16H9L10 12H6L5 16H3ZM6.5 10H10.5L11.5 6H7.5L6.5 10Z" fill="#443E99" />
    </svg>

  );
};
export const Lock: React.FC = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.8 11.6748C10.5853 11.6748 11.2219 11.0382 11.2219 10.2529C11.2219 9.46765 10.5853 8.83105 9.8 8.83105C9.01472 8.83105 8.37813 9.46765 8.37813 10.2529C8.37813 11.0382 9.01472 11.6748 9.8 11.6748Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.8 11.6748V13.3811" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.4875 6.55664H4.1125C3.79838 6.55664 3.54375 6.81128 3.54375 7.12539V15.0879C3.54375 15.402 3.79838 15.6566 4.1125 15.6566H15.4875C15.8016 15.6566 16.0562 15.402 16.0562 15.0879V7.12539C16.0562 6.81128 15.8016 6.55664 15.4875 6.55664Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.24062 6.55625V3.99688C7.24062 3.31809 7.51027 2.6671 7.99025 2.18712C8.47022 1.70715 9.12121 1.4375 9.8 1.4375C10.4788 1.4375 11.1298 1.70715 11.6097 2.18712C12.0897 2.6671 12.3594 3.31809 12.3594 3.99688V6.55625" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
};
export const Export: React.FC = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.125 15.0875H5.41875C4.36286 15.0875 3.35021 14.668 2.60358 13.9214C1.85695 13.1748 1.4375 12.1621 1.4375 11.1063C1.4375 10.0504 1.85695 9.03771 2.60358 8.29108C3.35021 7.54445 4.36286 7.125 5.41875 7.125C5.75185 7.12488 6.08371 7.16546 6.40695 7.24586" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.9875 9.40039C5.9875 8.4992 6.20165 7.6109 6.61231 6.80871C7.02297 6.00651 7.61837 5.31339 8.34946 4.78645C9.08055 4.25951 9.92639 3.91385 10.8173 3.77794C11.7082 3.64203 12.6186 3.71977 13.4735 4.00476C14.3285 4.28974 15.1035 4.7738 15.7346 5.41706C16.3658 6.06032 16.8351 6.84436 17.1038 7.70456C17.3725 8.56477 17.433 9.47651 17.2802 10.3647C17.1274 11.2528 16.7657 12.0919 16.225 12.8129" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.69668 11.8105L11.1068 9.40039L13.5168 11.8105" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.1063 15.0879V9.40039" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


  );
};
export const Folder: React.FC = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.2188 8.2623V14.5825C14.2188 14.7164 14.1656 14.8448 14.0709 14.9395C13.9762 15.0341 13.8479 15.0873 13.714 15.0873H2.84375C2.69291 15.0873 2.54825 15.0274 2.44158 14.9207C2.33492 14.8141 2.275 14.6694 2.275 14.5186V6.55605C2.275 6.40521 2.33492 6.26055 2.44158 6.15389C2.54825 6.04723 2.69291 5.9873 2.84375 5.9873H6.0643C6.18728 5.98781 6.30686 6.02767 6.40555 6.10105L8.38196 7.5798C8.48064 7.65319 8.60023 7.69305 8.7232 7.69355H13.65C13.8008 7.69355 13.9455 7.75348 14.0522 7.86014C14.1588 7.9668 14.2188 8.11146 14.2188 8.2623Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.2188 8.2623V14.5825C14.2188 14.7164 14.1656 14.8448 14.0709 14.9395C13.9762 15.0341 13.8479 15.0873 13.714 15.0873H2.84375C2.69291 15.0873 2.54825 15.0274 2.44158 14.9207C2.33492 14.8141 2.275 14.6694 2.275 14.5186V6.55605C2.275 6.40521 2.33492 6.26055 2.44158 6.15389C2.54825 6.04723 2.69291 5.9873 2.84375 5.9873H6.0643C6.18728 5.98781 6.30686 6.02767 6.40555 6.10105L8.38196 7.5798C8.48064 7.65319 8.60023 7.69305 8.7232 7.69355H13.65C13.8008 7.69355 13.9455 7.75348 14.0522 7.86014C14.1588 7.9668 14.2188 8.11146 14.2188 8.2623Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.55 5.98789V4.28164C4.55 4.1308 4.60992 3.98614 4.71659 3.87947C4.82325 3.77281 4.96791 3.71289 5.11875 3.71289H8.3393C8.46228 3.7134 8.58186 3.75326 8.68055 3.82664L10.657 5.30539C10.7556 5.37877 10.8752 5.41863 10.9982 5.41914H15.925C16.0758 5.41914 16.2205 5.47906 16.3272 5.58572C16.4338 5.69239 16.4938 5.83705 16.4938 5.98789V12.3081C16.4938 12.442 16.4406 12.5704 16.3459 12.665C16.2512 12.7597 16.1229 12.8129 15.989 12.8129H14.2188" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
};
export const Status_Completed: React.FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4375 8.125L8.85156 12.5L6.5625 10.3125" stroke="#46FF78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#46FF78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}