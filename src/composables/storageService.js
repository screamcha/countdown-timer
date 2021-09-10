import { provide, inject } from 'vue'
import StorageService from '../services/storage'

const SERVICE_KEY = 'storageService'

export function provideStorageService () {
  const storageService = new StorageService()
  provide(SERVICE_KEY, storageService)

  return storageService
}

export function useStorageService () {
  const storageService = inject(SERVICE_KEY)

  return storageService
}
