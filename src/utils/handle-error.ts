import { toast } from 'sonner'

export default function handleError (msg: string) {
  console.error(msg)
  toast.error(msg)
}
