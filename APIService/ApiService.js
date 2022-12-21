import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react'
import axios from 'axios'

export const getToken = () => {
  const token = window.localStorage.getItem('token').toString()
  if (token != null && token != '' && token != undefined && token.length > 0)
    return token
  else return 'error'
}

export const getRequest = async (url, data, config) =>
  await axios
    .get(url, data, config)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

export const postRequest = async (url, data, config) =>
  await axios
    .post(url, data, config)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

export const putRequest = async (url, data, config) =>
  await axios
    .put(url, data, config)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

export const deleteRequest = async (url, data, config) =>
  await axios
    .delete(url, data, config)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

export const customRequest = async (config) =>
  await axios(config)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

export const useCustomFetchHook = async (config) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(config)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setData(err))
  }, [url])
  return [data]
}
