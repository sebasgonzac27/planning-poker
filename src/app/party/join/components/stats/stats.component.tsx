import { usePartyContext } from '../../hooks'

export default function Stats () {
  const { revealed, average, totalCount } = usePartyContext()
  return (
    revealed &&
    <div>
      <p>Media: {average}</p>
      <p>Total de votos: {JSON.stringify(totalCount)}</p>
    </div>
  )
}
