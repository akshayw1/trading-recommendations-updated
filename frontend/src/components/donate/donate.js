import styles from "./styles.module.css";
import Image from "next/image";
export default function Donate() {
  return (
    <main className={styles.main}>
      <section>
        <h2 className="blue">
          For lifetime access to all features onetime payment of 20 USDT on BNB
          (BEP20) Chain
        </h2>
        <p>&quot;Only send USDT to this address&quot;</p>
        <p>Deposit USDT</p>
        <Image
          alt="scanner"
          width={236}
          height={235}
          src="/images/donate/Scanner.png"
        />
        <div className={styles.networkAddress}>
          <p className={styles.grey}>Network</p>
          <p>BNB Smart Chain (BEP20)</p>
          <hr />
          <p className={styles.grey}>Deposit Address</p>
          <p>0x20670a54ba2f5f9c5f1a70ead9053d01c572570b</p>
        </div>
        <p>Send Payment receipt or screenshot at “support@btcusdperp.com ” </p>
      </section>
    </main>
  );
}
