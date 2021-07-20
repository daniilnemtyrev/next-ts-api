import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/main'
import AddForm from '../components/addOperators'


export default function Add() {
  return (
    <Main>
    <AddForm></AddForm>
    </Main>
  )
}