import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilCart,
  cilCash,
  cilChart,
  cilStorage,
  cilTruck,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/theme/typography',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vouchers',
    to: '/icons/coreui-icons',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Stocks',
    to: '/notifications',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Icon Flags',
    to: '/icons/flags',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Analytics',
    to: '/base/tables',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
]

export default _nav
