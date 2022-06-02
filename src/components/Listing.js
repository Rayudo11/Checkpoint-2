import { useSelector } from 'react-redux';
import Table from './Table'

export default function Listing() {
    const {businesses} = useSelector(state => state.businesses)
    console.log(businesses, 'listings')

  return (
      <>
        <Table state={businesses}/>
      </>
  )
}
