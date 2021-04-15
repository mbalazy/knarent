import Timer from '../images/timer.svg'
import Wrench from '../images/wrench.svg'
import Empl from '../images/empl.svg'

const CONSTS = {
  title: 'Knarent',
  fullTitle: ' FHU Knarent Artur Knap',
  telephones: ['514 902 882'],
  mapCenter: { lat: 50.374, lng: 19.7941 } as const,
  emails: ['kontakt@knarent.pl'],
  adress: ['Brzozowka 55a', '32-340 Wolbrom'],
  openHours: [
    { days: 'Poniedzialek - Piatek', hours: '09:00 - 17:00' },
    { days: 'Sobota', hours: '09:00 - 13:00' },
    { days: 'Niedziela', hours: 'Prosimy o kontakt' },
  ],
  offerHeading: 'Co możemi Ci zaoferować?',
  offerSubheading:
    'Wybierz kategorię urządzeń w celu zapoznania się z naszą ofertą. Oferujemy wynajem w pełni profesjonalnego sprzętu do prac budowlanych, remontowych, wykończeniowych, instalacyjnych, ogrodowych oraz porządkowych.',

  featureSubheading:
    'Wiele urządzeń mechanicznych i sprzętów, które przydałyby się na budowie, dużo kosztuje. U nas czeka na Ciebie bogaty asortyment wszystkiego, co może usprawnić Twoją pracę.',

  featuredProductsHeading: 'Co wypożyczamy najczęściej?',
  contactHeading: 'Skontaktuj sie z nami',
  faqHeading: 'Najczęściej zadawane pytania',
  menuItemList: [
    { label: 'Strona główna', link: '/' },
    { label: 'Szukaj', link: '/szukaj' },
    { label: 'Kontakt', link: '/kontakt' },
    { label: 'FAQ', link: '/#faq' },
  ],

  linkToExternalMap:
    'https://www.google.com/maps/dir//Wypo%C5%BCyczalnia+sprz%C4%99tu+budowlano-ogrodniczego+Knarent,+Brzoz%C3%B3wka+55+A,+32-340+Brzoz%C3%B3wka/@50.3732841,19.7912093,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471703d87c1ffc6d:0x28a737f6c2e567b2!2m2!1d19.794068!2d50.373889!3e0',
}
export default CONSTS

export const listOfFeatures = [
  {
    icon: Timer,
    heading: 'Szybko, sprawnie i dokładnie',
    copy:
      'Wypożyczalnia Knarent oferuje wynajem sprzętu o różnym zastosowaniu. Rozliczenia następują według stawki godzinowej, dziennej lub tygodniowej. Oferujemy wyłącznie w pełni sprawny sprzęt wysokiej jakości, dzięki któremu każda praca zostanie wykonana szybko, sprawnie i dokładnie.',
  },
  {
    icon: Wrench,
    heading: 'Przeszkolimy Cię z obsługi',
    copy:
      'Niektóre z narzędzi wymagają przejścia krótkiego kursu obsługi oraz zapoznania się z zasadami użytkowania. W tym celu zawsze przeprowadzamy krótkie szkolenie i przekazujemy instrukcję obsługi urządzenia, które zamierzasz wynająć.',
  },
  {
    icon: Empl,
    heading: 'Zróżnicowana oferta',
    copy:
      'Profesjonalny sprzęt budowlany, ogrodniczy i sprzątający jest obecnie dostępny dla każdego, kto potrzebuje tego typu wyposażenia. Zarówno fachowe firmy, jak i klienci indywidualni, którzy budują własny dom lub chcą odświeżyć swoje cztery ściany mają dostęp do naszego asortymentu.',
  },
]
export type OneFeature = typeof listOfFeatures[number]
export const faqContent = [
  {
    question: 'Jak wynająć maszynę w wypożyczalni?',
    answer:
      'Najlepiej telefonicznie zarezerwować w naszej wypożyczalni i w dniu wynajmu odwiedzić naszą wypożyczalnię.',
  },
  {
    question: 'Ile kosztuje wynajem maszyn budowlanych w naszej wypożyczalni?',
    answer:
      'Najlepiej telefonicznie zarezerwować w naszej wypożyczalni i w dniu wynajmu odwiedzić naszą wypożyczalnię.',
  },
  {
    question: 'Czy przy wynajmie obowiązuje kaucja?',
    answer:
      'Najlepiej telefonicznie zarezerwować w naszej wypożyczalni i w dniu wynajmu odwiedzić naszą wypożyczalnię.',
  },
  {
    question: 'Czy każdy może wypożyczyć sprzęt?',
    answer:
      'Tak. Oferta skierowana jest do firm i osób prywatnych. Na życzenie wystawiamy fakturę VAT. ',
  },
]

export type OneIssue = typeof faqContent[number]
