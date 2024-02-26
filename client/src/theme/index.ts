import { extendTheme } from '@chakra-ui/react';

import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Form from './components/Form';
import FormError from './components/FormError';
import FormLabel from './components/FormLabel';
import Heading from './components/Heading';
import Input from './components/Input';
import Link from './components/Link';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Radio from './components/Radio';
import Select from './components/Select';
import Table from './components/Table';
import Tabs from './components/Tabs';
import Text from './components/Text';
import Textarea from './components/Textarea';
import config from './config';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import shadows from './foundations/shadows';
import styles from './styles';

const theme = extendTheme({
  styles,
  colors,
  config,
  fonts,
  shadows,
  components: {
    Button,
    Checkbox,
    Form,
    FormError,
    FormLabel,
    Heading,
    Input,
    Link,
    Menu,
    Modal,
    Radio,
    Select,
    Table,
    Tabs,
    Text,
    Textarea,
  },
});

export default theme;
