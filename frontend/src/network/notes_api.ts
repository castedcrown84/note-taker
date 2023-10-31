import { json } from 'sequelize'
import { Note } from '../models/notes'

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init)
  if (response.ok) {
    return response
  } else {
    throw new Error('Error Message')
  }
}

export const fetchNotes = async (): Promise<Note[]> => {
  const response = await fetchData('/apiroute', { method: 'GET' })
  return response.json()
}

export interface NoteInput {
  title: string
  text: string
}

export async function createNote(note: NoteInput): Promise<Note> {
  const response = await fetch('/apiroute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })

  return response.json()
}

export async function updateNote(
  noteId: string,
  note: NoteInput
): Promise<Note> {
  const response = await fetchData('/apiroute/' + noteId, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })

  return response.json()
}
export async function deleteNote(noteId: string) {
  await fetchData('/apiroute/' + noteId, {
    method: 'DELETE',
  })
}
