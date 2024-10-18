

import { defineStore } from "pinia";
import type { Book } from '@/models/BookModel'
import type { CardState } from "@/models/CardState";

interface CarroState {
  count: number
}

export const useCarroState = defineStore('carro', {
  state: (): CarroState => ({
    count: 0,
  }),
  actions: {
    agregar(book: Book):  void {
         
            this.count++
        },
    eliminar(books: Book[]): void {
  
      this.count--
  },
  },

  getters: {
    total: (state: CarroState): number => state.count,
  },
})



