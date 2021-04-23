import React from 'react'
import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import EquipmentOverview from '../components/equipment/EquipmentOverview'

const InputStyles = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.lightText};
  border: none;
  font-size: inherit;
  border-bottom: 1px solid white;
`

const Search = () => {
  const location = useLocation()
  const searchQuery = location.search.replace('?', '')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => navigate(`./?${e.target.value}`)
  return (
    <>
      <EquipmentOverview
        searchForm={<InputStyles onChange={handleChange} defaultValue={searchQuery} />}
      >
        <p>prod</p>
        <p>prod</p>
        <p>prod</p>
      </EquipmentOverview>
    </>
  )
}

export default Search
