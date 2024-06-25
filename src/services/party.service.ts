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

export async function getDistributions () {
  try {
    const { data } = await api.get('/party/distributions')
    return data
  } catch (error) {
    handleError('Ocurrió un error obteniendo las distribuciones')
  }
}

export async function toggleDistribution (roomId: string, distribution: string) {
  try {
    const { data } = await api.put('/party/toggle-distribution', {
      roomId,
      distribution
    })
    return data
  } catch (error) {
    handleError('Ocurrió un error cambiando la distribución')
  }
}

export async function toggleAdmin (roomId: string, userId: string) {
  try {
    const { data } = await api.put('/party/toggle-admin', {
      roomId,
      userId
    })
    return data
  } catch (error) {
    handleError('Ocurrió un error cambiando el admin')
  }
}
