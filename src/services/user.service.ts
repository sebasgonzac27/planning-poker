import { api } from '@/utils'
import { toast } from 'sonner'

export async function vote ({ vote, roomId, userId } : { vote: string, roomId: string, userId: string}) {
  try {
    const { data } = await api.post('/party/vote', {
      vote,
      roomId,
      userId
    })
    return data
  } catch (error) {
    console.error('An error occurred while voting:', error)
    toast.error('Error al votar.')
  }
}
