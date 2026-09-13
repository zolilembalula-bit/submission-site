/* =========================================
   MARK SUBMISSION PORTAL
   ========================================= */

.portal-home {
  min-height: 100vh;
  background: #f5f7fb;
  padding: 50px 20px 80px;
}

.portal-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero */

.portal-hero {
  text-align: center;
  padding: 45px 20px 55px;
}

.portal-badge {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 999px;
  background: #e8eefc;
  color: #3157a4;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin-bottom: 20px;
}

.portal-hero h1 {
  margin: 0;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 1.05;
  font-weight: 800;
  color: #172033;
}

.portal-hero h1 span {
  color: #3157a4;
}

.portal-subtitle {
  max-width: 680px;
  margin: 22px auto 30px;
  font-size: 18px;
  line-height: 1.7;
  color: #687386;
}

/* Buttons */

.portal-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  padding: 14px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #3157a4;
  color: white;
  box-shadow: 0 8px 20px rgba(49, 87, 164, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: #25488e;
}

.btn-secondary {
  background: white;
  color: #3157a4;
  border: 1px solid #dce2ec;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  border-color: #3157a4;
}

/* Deadline */

.deadline-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 28px 32px;
  margin-bottom: 35px;
  background: white;
  border: 1px solid #e4e8ef;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(24, 36, 58, 0.06);
}

.status-label {
  color: #3157a4;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.deadline-card h2 {
  margin: 7px 0;
  color: #172033;
}

.deadline-card p {
  margin: 0;
  color: #707b8c;
}

.deadline {
  min-width: 210px;
  padding: 16px;
  text-align: center;
  border-radius: 12px;
  background: #f1f5ff;
}

.deadline span {
  display: block;
  font-size: 12px;
  color: #69758a;
  margin-bottom: 5px;
}

.deadline strong {
  color: #3157a4;
}

/* Cards */

.portal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.portal-card {
  background: white;
  border: 1px solid #e4e8ef;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 8px 25px rgba(24, 36, 58, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.portal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 35px rgba(24, 36, 58, 0.09);
}

.featured-card {
  border-top: 4px solid #3157a4;
}

.card-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  border-radius: 10px;
  background: #edf2ff;
  color: #3157a4;
  font-size: 20px;
  font-weight: 800;
}

.portal-card h3 {
  margin: 0 0 10px;
  color: #172033;
  font-size: 20px;
}

.portal-card p {
  color: #707b8c;
  line-height: 1.6;
  min-height: 75px;
}

.card-link {
  display: inline-block;
  margin-top: 10px;
  color: #3157a4;
  font-weight: 700;
  text-decoration: none;
}

/* Instructions */

.instructions-section {
  margin-top: 70px;
}

.section-heading {
  text-align: center;
  margin-bottom: 30px;
}

.section-heading span {
  color: #3157a4;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.3px;
}

.section-heading h2 {
  margin-top: 8px;
  font-size: 32px;
  color: #172033;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.step {
  display: flex;
  gap: 14px;
  padding: 20px;
  background: white;
  border-radius: 14px;
  border: 1px solid #e4e8ef;
}

.step-number {
  color: #3157a4;
  font-size: 13px;
  font-weight: 800;
}

.step h3 {
  margin: 0 0 7px;
  color: #172033;
}

.step p {
  margin: 0;
  color: #737e8f;
  font-size: 14px;
  line-height: 1.5;
}

/* Notice */

.notice {
  display: flex;
  gap: 8px;
  margin-top: 35px;
  padding: 18px 20px;
  border-left: 4px solid #3157a4;
  background: #eef3ff;
  border-radius: 8px;
  color: #536075;
  font-size: 14px;
}

.notice strong {
  color: #172033;
}

/* Mobile */

@media (max-width: 850px) {
  .portal-grid {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: 1fr 1fr;
  }

  .deadline-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .deadline {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .portal-home {
    padding: 25px 15px 50px;
  }

  .portal-hero {
    padding: 30px 10px 40px;
  }

  .portal-hero h1 {
    font-size: 42px;
  }

  .portal-subtitle {
    font-size: 16px;
  }

  .portal-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .steps {
    grid-template-columns: 1fr;
  }

  .deadline-card {
    padding: 22px;
  }
}
