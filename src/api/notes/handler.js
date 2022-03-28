class NotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request, h) {
    try {
      const { title = 'untitled', tags, body } = request.payload;

      const noteId = this._service.addNote({ title, tags, body });

      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId,
        },
      });

      response.code(201);
      return response;
    } catch {
      const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
      });

      response.code(400);
      return response;
    }
  }

  getNotesHandler() {}

  getNoteByIdHandler() {}

  putNoteByIdHandler() {}

  deleteNoteByIdHandler() {}
}

module.exports = NotesHandler;
