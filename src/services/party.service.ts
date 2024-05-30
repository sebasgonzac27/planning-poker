import { api } from '@/utils'
import handleError from '@/utils/handle-error'

export async function createParty (name: string) {
  try {
    const { data } = await api.post('/party', {
      name
    })
    return data
  } catch (error) {
    handleError('Ocurrió un error creando la partida')
  }
}

export async function getAverage (roomId: string) {
  try {
    const { data } = await api.get(`/party/average/${roomId}`)
    return data
  } catch (error) {
    handleError('Ocurrió un error obteniendo el promedio')
  }
}

export async function resetParty (roomId: string) {
  try {
    const { data } = await api.get(`/party/reset/${roomId}`)
    return data
  } catch (error) {
    handleError('Ocurrió un error reiniciando la partida')
  }
}
