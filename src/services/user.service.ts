import { api } from '@/utils'
import handleError from '@/utils/handle-error'

export async function vote ({ vote, roomId, userId } : { vote: string, roomId: string, userId: string}) {
  try {
    const { data } = await api.post('/party/vote', {
      vote,
      roomId,
      userId
    })
    return data
  } catch (error) {
    handleError('Ocurrió un error al votar')
  }
}

export async function getRoles () {
  try {
    const { data } = await api.get('/party/roles')
    return data
  } catch (error) {
    handleError('Ocurrió un error obteniendo los roles')
  }
}

export async function toggleRole ({ role, roomId, userId } : { role: string, roomId: string, userId: string }) {
  try {
    const { data } = await api.put('/party/toggle-role', {
      role,
      roomId,
      userId
    })
    return data
  } catch (error) {
    handleError('Ocurrió un error al cambiar de rol')
  }
}
