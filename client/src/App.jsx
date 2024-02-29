import React from 'react'
import MainLayout from "./components/Layout"
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'
import CardForm from './components/UI/Card'
import { Box, Button, Heading, Text, Card, CardHeader, CardBody, Stack, StackDivider } from '@chakra-ui/react'
import InputLabel from './components/UI/InputLabel'
import SelectLabel from './components/UI/SelectLabel'

import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import formService from "./services/formService";

const schema = yup.object().shape({
  patientName: yup.string().min(3).max(25).required('"patientName" tidak boleh dikosongi'),
  dateOfTreatment: yup.date().required('"dateOfTreatment" tidak boleh dikosongi'),
  treatmentDescription: yup.array().required('"treatmentDescription" tidak boleh dikosongi'),
  medicationsPrescribed: yup.array().required('"medicationsPrescribed" tidak boleh dikosongi'),
  // costOfTreatment: yup.number().positive('"costOfTreatment" harus bernilai positif').required('"costOfTreatment" tidak boleh dikosongi').label('Biaya Pengobatan')
});

function App() {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      patientName: '',
      dateOfTreatment: '',
      treatmentDescription: [],
      medicationsPrescribed: []
    }
  });

  const [dataTreatments, setDataTreatments] = React.useState([]);
  const [treatments, setTreatments] = React.useState([]);
  const [medications, setMedications] = React.useState([]);
  const [selectedTreatment, setSelectedTreatment] = React.useState([]);

  const fetchTreatments = () => {
    formService.fetchTreatments().then(response => {
      const data = response.data.results;
      let treatments = data.map(val => ({
        label: `${val.treatmentDescription} - Rp. ${val.price} (${val.category})`,
        value: val.id,
        price: val.price
      }));
      setDataTreatments(data);
      setTreatments(treatments);
    }).catch((err) => console.error(err))
  }

  const fetchMedications = () => {
    formService.fetchMedications().then(response => {
      const data = response.data.results
      let treatments = data.map(val => ({
        label: `${val.name} ${val.dosage}`,
        value: val.id
      }));
      setMedications(treatments);
    }).catch((err) => console.error(err))
  }

  React.useEffect(() => {
    fetchTreatments()
    fetchMedications()
  }, []);

  console.log(methods.watch())

  const onSubmit = async (data) => {
    const costOfTreatment = data.treatmentDescription.reduce((total, item) => total + item.price, 0);
    const payload = {
      ...data,
      medicationsPrescribed: data.medicationsPrescribed.map(el => el.value),
      treatmentDescription: data.treatmentDescription.map(el => el.value),
      costOfTreatment
    }

    formService.addPatient(payload).then((res) => {

      methods.reset()
      Swal.fire({
        title: "Good job!",
        text: "Success create treatment patient!",
        icon: "success"
      });
    }).catch((err) => {
      // alert('error', err)
      Swal.fire({
        title: "Error",
        text: "Something went wrong!",
        icon: "error"
      });
    })
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Healthcare Treatment</title>
        <meta
          name="description"
          content="The application's purpose is for medical providers to input details of treatments and medications for patients."
        />
      </Helmet>
      <Heading textAlign="center" mt={4}>
        Form Healthcare Treatment
      </Heading>
      <Text mt={2} textAlign="center" fontSize='xl'>
        The application's purpose is for medical providers to input details of treatments and medications for patients.
      </Text>

      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        mt={4}
        gap={10}
      >
        <Box w={{ base: '100%', md: 'flex' }}>
          <Card bg="#FFFAFA">
            <CardHeader>
              <Heading size='md'>List Patient</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Summary
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Overview
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    Check out the overview of your clients.
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Analysis
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <CardForm>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <InputLabel
                label='Patient Name'
                name='patientName'
                placeholder='Patient Name'
                size='sm'
              />
              <InputLabel
                label='Date of Treatment'
                name='dateOfTreatment'
                placeholder='Date of Treatment'
                size='sm'
                type="datetime-local"
              />
              <SelectLabel
                name="treatmentDescription"
                label="Treatment Description"
                placeholder='Treatment Description'
                options={treatments}
                onChange={(el) => {
                  setSelectedTreatment(el)
                }}
              />
              <SelectLabel
                name="medicationsPrescribed"
                label="Medications Prescribed"
                placeholder='Medications Prescribed'
                options={medications}
              />
              <Button variant="solid" type="submit" isDisabled={!methods.formState.isValid} colorScheme='blue' mt={3} width="100%" >Submit</Button>
            </form>
          </FormProvider>
        </CardForm>
      </Stack>
    </MainLayout>
  )
}

export default App
