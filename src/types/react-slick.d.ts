declare module 'react-slick' {
  import { ReactNode } from 'react';
  
  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    nextArrow?: ReactNode;
    prevArrow?: ReactNode;
<<<<<<< HEAD
    children?: ReactNode;
    className?: string;
    'aria-label'?: string;
    arrows?: boolean;
    customPaging?: (i: number) => ReactNode;
=======
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
  }

  export default class Slider extends React.Component<Settings> {}
} 