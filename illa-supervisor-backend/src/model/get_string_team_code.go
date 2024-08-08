package model

type GetStringTeamCode struct {
	Code string
}

func NewGetStringTeamCode(code string) *GetStringTeamCode {
	return &GetStringTeamCode{
		Code: code,
	}
}

func (resp *GetStringTeamCode) ExportForFeedback() interface{} {
	return resp
}
