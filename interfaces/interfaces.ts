import { NextPageContext } from "next";

export interface IOperator{
	id: string | number
	name: string
	picture: string
}

export interface IChildren {
	children: JSX.Element
}

export interface IOperatorPay extends NextPageContext {
	query:{
		id:string;
	}
}

export interface IResult {
	state:boolean,
	result:boolean
}