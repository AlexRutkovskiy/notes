import {
  HiOutlineHome,
  HiOutlineDocumentAdd,
  HiOutlineDocumentDuplicate,
  HiOutlineCog
} from "react-icons/hi";

export const routes = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: HiOutlineHome
  },
  {
    id: 'newCategory',
    label: 'Category',
    path: '/category',
    icon: HiOutlineDocumentAdd
  },
  {
    id: 'newNote',
    label: 'New Note',
    path: '/new-note',
    icon: HiOutlineDocumentDuplicate
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: HiOutlineCog
  }
]