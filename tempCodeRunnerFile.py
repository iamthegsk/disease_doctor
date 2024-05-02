    def NaiveBayes(symp1, symp2, symp3, symp4, symp5):
        from sklearn.naive_bayes import MultinomialNB
        gnb = MultinomialNB()
        gnb = gnb.fit(X, np.ravel(y))
        from sklearn.metrics import accuracy_score
        y_pred = gnb.predict(X_test)
        print(accuracy_score(y_test, y_pred))
        print(accuracy_score(y_test, y_pred, normalize=False))

        psymptoms = [symp1, symp2, symp3, symp4, symp5]

        for k in range(0, len(l1)):
            for z in psymptoms:
                if(z == l1[k]):
                    l2[k] = 1

        inputtest = [l2]
        predict = gnb.predict(inputtest)
        predicted = predict[0]

        h = 'no'
        for a in range(0, len(disease)):
            if(disease[predicted] == disease[a]):
                h = 'yes'
                break

        if (h == 'yes'):
            return disease[a]
        else:
            return "No Disease"

    return NaiveBayes(symp1, symp2, symp3, symp4, symp5)