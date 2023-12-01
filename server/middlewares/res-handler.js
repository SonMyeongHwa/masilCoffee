class ResponseHandler {
  static respondWithSuccess(res, data, message = "Success") {
    res.status(200).json({ message, data });
  }

  static respondWithNotfound(res, message = "Not Found") {
    res.status(404).json({ error: message });
  }

  static respondWithError(res, message = "Server Error") {
    res.status(500).json({ error: message });
  }
}

module.exports = ResponseHandler;
