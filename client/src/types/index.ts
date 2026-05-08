export interface Sistema {
  id: string
  nombre: string
  descripcion: string
  url: string
  icono?: string
  categoria: string
  activo: boolean
}

export interface Usuario {
  id: string
  nombre: string
  correo: string
  rol: 'admin' | 'usuario'
}
