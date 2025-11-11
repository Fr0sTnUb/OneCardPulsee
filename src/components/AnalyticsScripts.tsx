import { Helmet } from 'react-helmet-async'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-HBGVT511BH'

const AnalyticsScripts = () => (
  <Helmet>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${measurementId}');
      `}
    </script>
  </Helmet>
)

export default AnalyticsScripts
