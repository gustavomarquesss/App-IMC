import { View, Text, TextInput, Button } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Logo from '../../components/Logo'

function Imc(){
  const [resultado, setResultado] = useState('')
  const [peso, setPeso] = useState(0.00)
  const [altura, setAltura] = useState(0.00)

  function calcularIMC(){
    let imc = peso / (altura * altura)
    let classificacao = ''

    if (imc < 18.5)
      classificacao = 'Abaixo do peso'
    else if (imc < 24.9)
      classificacao = 'Peso normal'
    else if (imc < 29.9)
      classificacao = 'Sobrepeso'
    else if (imc < 34.9)
      classificacao = 'Obesidade Grau I'
    else if (imc < 39.9)
      classificacao = 'Obesidade Grau II'
    else
      classificacao = 'Obesidade Grau III ou Mórbida'

    setResultado(imc.toFixed(2) + " - " + classificacao)    
  }

  return(
    <View>
      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <Logo />

      <TextInput
        style={styles.entradaDados}
        placeholder={'Informe o seu peso'}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.entradaDados}
        placeholder={'Informe a sua altura'}
        onChangeText={setAltura}
      />

      <View style={styles.botao}>
        <Button title='Calcular IMC' color='orange' onPress={calcularIMC}/>
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}

export default Imc