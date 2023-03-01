import { Laborant } from 'src/app/model/laborantModel';
import { MenuItem } from 'src/app/model/menuModel';
import { News } from 'src/app/model/news';

export class Data {
  public static menuItems: MenuItem[] = [
    {
      id: 1,
      caption: 'ჩვენი კლინიკა',
      icon: 'pi pi-plus',
      text: 'ინტერკლინიკა დაარსდა 2003 წლის 3 სექტემბერს ქ...',
      isSelected: false,
    },
    {
      id: 2,
      caption: 'სახლში მომსახურება',
      icon: 'pi pi-home',
      text: 'ულტრაბგერითი კვლევა ეს არის ორგანოების და...',
      isSelected: true,
    },
    {
      id: 3,
      caption: 'სახლში მომსახურება',
      icon: 'pi pi-id-card',
      text: 'ინტერკლინიკ ექიმების სიის ნახვა..',
      isSelected: false,

    },
    {
      id: 4,
      caption: 'სერვისები',
      icon: 'pi pi-cog',
      text: 'ინტერკლინიკაში შესაძლებელია ყველა საჭირო სამედიცინო...',
      isSelected: false,
    },
  ];

  public static laborants: Laborant[] = [
    {
        id: 1,
        firstname: "ქეთევან",
        lastname: "მჭედლიშვილი",
        imageUrl: "assets/ქეთევან.png"
    },
    {
        id: 2,
        firstname: "მარია",
        lastname: "დათეშიძე",
        imageUrl: "assets/მარია.png"
    },
    {
        id: 2,
        firstname: "თამარ",
        lastname: "კიკნაძე",
        imageUrl: "assets/თამარ.png"
    }
  ]

  public static news: News[] = [
    {
      id: 1,
      imageUrl:"assets/newsImg1.png",
      caption:"სიახლე ინტერკლინიკაში!",
      day: 11,
      month: "ნოემბერი",
      year: 2021,
      text: "ნაციონალური ბიზნეს-რეიტინგების კავშირის“ მიერ, სამედიცინო..."
    },
    {
      id: 2,
      imageUrl:"assets/newsImg2.png",
      caption:"სიახლე ინტერკლინიკაში!",
      day: 24,
      month: "ნოემბერი",
      year: 2021,
      text: "ნაციონალური ბიზნეს-რეიტინგების კავშირის“ მიერ, სამედიცინო..."
    },
    {
      id: 3,
      imageUrl:"assets/newsImg3.png",
      caption:"სიახლე ინტერკლინიკაში!",
      day: 18,
      month: "ნოემბერი",
      year: 2021,
      text: "ნაციონალური ბიზნეს-რეიტინგების კავშირის“ მიერ, სამედიცინო..."
    }
  ]
}
