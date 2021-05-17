import React, { useEffect, useRef } from 'react'
import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import { InputStyles, InputWrapper, SearchIconStyles } from './SearchForm.style'
import VisuallyHidden from './VisuallyHidden'

const SearchForm = () => {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])

  const location = useLocation()
  const searchQuery = location.search.replace('?', '')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => navigate(`./?${e.target.value}`)

  return (
    <InputWrapper>
      <label htmlFor="szukaj" role="search">
        <VisuallyHidden>szukaj</VisuallyHidden>
        <InputStyles
          ref={ref}
          id="szukaj"
          name="szukaj"
          onChange={handleChange}
          defaultValue={searchQuery}
        />
        <SearchIconStyles />
      </label>
    </InputWrapper>
  )
}

export default SearchForm
