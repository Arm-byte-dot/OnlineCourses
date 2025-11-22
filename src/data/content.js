// Static content and assets that feed page sections.
import courseOne from '../assets/courses/discover.png'
import courseTwo from '../assets/courses/home.png'
import courseThree from '../assets/courses/landing.png'
import profileOne from '../assets/profiles/profile1.jpg'
import profileTwo from '../assets/profiles/profile2.jpg'
import profileThree from '../assets/profiles/profile3.jpg'
import profileFour from '../assets/profiles/profile4.jpg'

export const features = [
  {
    title: 'Knowledge is power',
    description:
      'Gain valuable insights and skills that empower you to achieve your goals and advance your career.',
    icon: 'lightbulb',
  },
  {
    title: 'Flexible Learning',
    description:
      'Learn at your own pace with access to courses anytime, anywhere, on any device.',
    icon: 'clock',
  },
  {
    title: 'Expert instruction',
    description:
      'Learn from industry professionals and world-class educators with real-world experience.',
    icon: 'star',
  },
]

export const testimonials = [
  {
    quote:
      'This platform transformed my career. The courses are comprehensive and the instructors are incredibly knowledgeable.',
    name: 'Sarah Johnson',
    avatar: profileOne,
  },
  {
    quote:
      'Amazing learning experience! I’ve gained skills that directly apply to my work. Highly recommend to anyone looking to grow.',
    name: 'Michael Chen',
    avatar: profileTwo,
  },
  {
    quote:
      'The flexibility and quality of courses here are unmatched. I can learn at my own pace while balancing my full-time job.',
    name: 'Emily Rodriguez',
    avatar: profileThree,
  },
  {
    quote:
      'Best investment in my education. The courses are well-structured and the community support is fantastic.',
    name: 'James Wilson',
    avatar: profileFour,
  },
]

export const courses = [
  {
    title: 'Mastering C++ Programming from Zero to Advanced',
    rating: '5.0',
    badges: ['(31854)'],
    theme: 'teal',
    image: courseOne,
  },
  {
    title: 'UI/UX Fundamentals for Beginners',
    rating: '4.8',
    badges: ['(21782)'],

    theme: 'purple',
    image: courseTwo,
  },
  {
    title: 'JavaScript Starter Pack: Learn JS from Zero',
    rating: '4.8',
    badges: ['(21722)'],

    theme: 'navy',
    image: courseThree,
  },
]

export const plans = [
  {
    title: 'Free plan',
    price: '0$',
    period: '',
    cta: 'Get started',
    features: [
      'Access to selected free courses',
      'Limited quizzes & practice tasks',
      'Basic progress tracking',
      'Community forum (limited)',
      'No certificates',
    ],
  },
  {
    title: 'Plus plan',
    price: '19.99$',
    period: 'per month',
    cta: 'Get started',
    highlights: true,
    features: [
      'Everything in Free',
      'Full access to all beginner, intermediate & advanced courses',
      'Course certificates',
      'Downloadable resources (PDFs, templates)',
      'Full community access',
      'Priority support',
      'Offline access',
    ],
  },
  {
    title: 'Pro plan',
    price: '49.99$',
    period: 'per month',
    cta: 'Get started',
    features: [
      'Everything in Plus',
      '1-on-1 mentor sessions',
      'Personalized study roadmap',
      'Portfolio review',
      'Early access to new courses',
      'AI-powered learning assistant',
      '24/7 priority support',
    ],
  },
]

export const institutions = [
  'HARVARD UNIVERSITY',
  'Stanford university',
  'Cambridge university',
  'MIT'
]
