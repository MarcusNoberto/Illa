package model

type GetJWTResponse struct {
	Token string `json:"token"`
}

func NewGetJWTResponse(jwt string) *GetJWTResponse {
	resp := &GetJWTResponse{
		Token: jwt,
	}
	return resp
}

func (resp *GetJWTResponse) ExportForFeedback() interface{} {
	return resp
}
